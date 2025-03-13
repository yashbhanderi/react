import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// This function gets called at build time. Provides props to your page.
// It will create static pages for each cabin.
// Ex., if you have 3 cabins, it will create 3 pages ---- /cabins/1, /cabins/2, /cabins/3
export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export async function generateMetadata(context) {
  const params = await context.params;
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);
  return { title: `Cabin ${cabin.name}` };
}

export default async function Page(context) {
  const params = await context.params;
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
