import CatalogSidebar from "@/components/catalogSidebar";
import { getCategoriesTree } from "@/services/categories";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoriesTree();

  return (
    <section className="flex flex-col items-center justify-center py-4 flex-auto">
      <div className="flex flex-col flex-auto xl:flex-row w-full">
        <div className="xl:basis-80 flex-shrink-0">
          <CatalogSidebar categories={categories.data} />
        </div>
        <div className="flex-auto">{children}</div>
      </div>
    </section>
  );
}
