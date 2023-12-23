import { CatalogSidebar } from "@/components/catalogSidebar";
import { getCategoriesTree } from "@/services/categories";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategoriesTree();

  return (
    <section className="flex flex-col items-center justify-center py-4 flex-auto">
      <div className="flex flex-auto w-full">
        <div className="basis-80 flex-shrink-0">
          <CatalogSidebar categories={categories.data} />
        </div>
        <div className="flex-auto">{children}</div>
      </div>
    </section>
  );
}
