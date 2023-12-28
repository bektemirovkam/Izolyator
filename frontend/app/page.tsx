import CatalogSidebar from "@/components/catalogSidebar";
import { CategoriesList } from "@/components/categoriesList";
import { title } from "@/components/primitives";
import { getCategoriesTree, getTopListCategories } from "@/services/categories";
import clsx from "clsx";

export default async function HomePage() {
  const topCategories = await getTopListCategories();
  const categories = await getCategoriesTree();

  return (
    <section className="flex flex-col items-center justify-center py-4 flex-auto">
      <div className="flex flex-col flex-auto xl:flex-row w-full">
        <div className="xl:basis-80 flex-shrink-0">
          <CatalogSidebar categories={categories.data} />
        </div>
        <div className="flex-auto">
          <div className="flex flex-col xl:pl-4">
            <h1 className={clsx(title({ size: "sm" }), "mb-7")}>
              Основные категории
            </h1>
            <CategoriesList categories={topCategories.data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 300;
