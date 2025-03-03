import { notFound } from "next/navigation";

export default async function Home({params}) {
  const queryParams = await params;

  if (queryParams.slug.length>1 && parseInt(queryParams.slug[1]) > 100) {
    notFound();
  }

  return (
    <div >
      DOCS PAGE
    </div>
  );
}
