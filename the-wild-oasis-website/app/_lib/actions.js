"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(form) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const nationalID = form.get("nationalID");
  const [nationality, countryFlag] = form.get("nationality").split("%");

  // Write a regex expression below to validate the nationalID
  // The nationalID must be a string with 6  to 12 digits & all chars must be numbers
  const nationalIDRegex = /^\d{6,12}$/;
  if (!nationalIDRegex.test(nationalID)) {
    throw new Error(
      "The national ID number must be a number with 6 to 12 digits."
    );
  }

  const updatedGuest = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedGuest)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  // why we do this?
  // We need to revalidate the profile page so that the updated guest data is displayed
  // Otherwise It'll display cached data until the cache is invalidated
  // i.e. we're telling Next.js to cache the data again for this path
  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const booings = await getBookings(session.user.guestId);
  const bookingIds = booings.map((booking) => booking.id);

  if (!bookingIds.includes(bookingId)) {
    throw new Error("You can only delete your own bookings.");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateReservation(form) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const bookingId = form.get("bookingId");

  const booings = await getBookings(session.user.guestId);
  const bookingIds = booings.map((booking) => Number(booking.id));

  if (!bookingIds.includes(Number(bookingId))) {
    throw new Error("You can only update your own bookings.");
  }

  const observations = form.get("observations");
  const numGuests = form.get("numGuests");

  const updatedFields = {
    observations,
    numGuests,
  };

  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated!");
  }

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const newBooking = {
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
    guestId: session.user.guestId,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("Booking could not be created!");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  return { success: true, cabinId: bookingData.cabinId };
}