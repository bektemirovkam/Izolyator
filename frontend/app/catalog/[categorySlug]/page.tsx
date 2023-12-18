import { getCategoryInfo } from "@/services/categories";

export default async function CategoryInfoPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const categoryInfo = await getCategoryInfo(params.categorySlug);

  return (
    <div className="flex items-center gap-4">
      <h1>{params.categorySlug}</h1>
    </div>
  );
}
