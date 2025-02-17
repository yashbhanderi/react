import { notFound } from "next/navigation";

export default async function Home({params}) {
  const queryParams = await params;

  if (queryParams.slug.length>1 && parseInt(queryParams.slug[1]) > 100) {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      DOCS PAGE
    </div>
  );
}
