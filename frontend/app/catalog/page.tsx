import { CatalogSidebar } from "@/components/catalogSidebar";
import { TopCategories } from "@/components/topCategories";
import { getCategories, getTopCategories } from "@/services/categories";

export default async function CatalogPage() {
  const categories = await getCategories();
  const topCategories = await getTopCategories();

  console.log("categories ---> ", categories);
  console.log("topCategories ---> ", topCategories);

  return (
    <div className="flex items-center gap-4">
      <CatalogSidebar categories={categories} />
      <TopCategories categories={topCategories} />
    </div>
  );
}
