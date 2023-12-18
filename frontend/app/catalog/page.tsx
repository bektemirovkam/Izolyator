import { CatalogSidebar } from "@/components/catalogSidebar";
import { TopCategories } from "@/components/topCategories";
import { getCategories, getTopCategories } from "@/services/categories";

export default async function CatalogPage() {
  const topCategories = await getTopCategories();

  return (
    <div className="flex items-center gap-4">
      <h1>title</h1>
      <TopCategories categories={topCategories.data} />
    </div>
  );
}
