import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import CabinList from "../_components/CabinList";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// This below is optional. If you want to use ISR (Incremental Static Regeneration) for this page, you can set the revalidate value.
// This will make sure that the page is regenerated after the specified time.
// If this is zero, the page will be regenerated on every request.
// If this is not set, the page will be generated at build time and will not be regenerated.
// This is useful if you want to update the page content after some time.
export const revalidate = 20;

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  searchParams = await searchParams;
  const filter = searchParams?.capacity ?? null;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter currentFilter={filter} />
      </div>

      <Suspense
        fallback={<Spinner />}
        // Why this key is used in Suspense?
        // The key is used to tell React that the component has changed.
        // If the key changes, React will unmount the old component and mount a new one.
        key={filter}
      >
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
