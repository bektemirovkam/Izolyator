import { CatalogSidebar } from "@/components/catalogSidebar";
import { getCategories, getTopCategories } from "@/services/categories";

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <section className="flex flex-col items-center justify-center mt-4 h-full">
      <div className="flex flex-auto w-full">
        <div className="basis-80">
          <CatalogSidebar categories={categories.data} />
        </div>
        <div className="flex-auto">{children}</div>
      </div>
    </section>
  );
}
