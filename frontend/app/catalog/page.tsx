import { CatalogSidebar } from "@/components/catalogSidebar";
import { TopCategories } from "@/components/topCategories";
import { getTopListCategories } from "@/services/categories";

export default async function CatalogPage() {
  const topCategories = await getTopListCategories();

  return (
    <div className="flex flex-col pl-4">
      <h1>title</h1>
      <TopCategories categories={topCategories.data} />
    </div>
  );
}
