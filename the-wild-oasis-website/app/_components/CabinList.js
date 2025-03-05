import React from "react";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({filter}) {

  // This is a special function that tells Next.js to not cache the result of this function.
  // This is useful when you want to make sure that the data is always fresh.
  // Alternative to revalidate in ISR.
  // Which should we prefered? revalidate or noStore?
  // revalidate is better for SEO, noStore is better for performance.
  // If you want to make sure that the data is always fresh, use noStore.
  // noStore();

  const cabins = await getCabins();

  let displayedCabins;
  if(filter === "small") displayedCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
  else if(filter === "medium") displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
  else if(filter === "large") displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);
  else displayedCabins = cabins;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
