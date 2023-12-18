import { CatalogSidebar } from "@/components/catalogSidebar";
import { CategoryInfo } from "@/components/categoryInfo";

export default function CatalogPage() {
  return (
    <div className="flex items-center gap-4">
      <CatalogSidebar />
      <CategoryInfo />
    </div>
  );
}
