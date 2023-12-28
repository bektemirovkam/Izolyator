import { CategoriesList } from "@/components/categoriesList";
import { title } from "@/components/primitives";
import { getTopListCategories } from "@/services/categories";
import clsx from "clsx";

export default async function CatalogPage() {
  const topCategories = await getTopListCategories();

  return (
    <div className="flex flex-col xl:pl-4">
      <h1 className={clsx(title({ size: "sm" }), "mb-7")}>
        Основные категории
      </h1>
      <CategoriesList categories={topCategories.data} />
    </div>
  );
}

export const revalidate = 300;
