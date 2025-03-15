import UpdateReservation from "@/app/_components/UpdateReservation";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page(context) {
  const params = await context.params;
  const { bookingId } = params;

  const { cabinId, numGuests, observations } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <UpdateReservation maxCapacity={maxCapacity} bookingId={bookingId} numGuests={numGuests} observations={observations} />
    </div>
  );
}