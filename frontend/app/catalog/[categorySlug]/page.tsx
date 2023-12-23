import { CategoriesList } from "@/components/categoriesList";
import { title } from "@/components/primitives";
import { getCategoryInfo } from "@/services/categories";
import clsx from "clsx";

export default async function CategoryInfoPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const categoryInfo = await getCategoryInfo(params.categorySlug);

  return (
    <div className="flex flex-col pl-4">
      <h1 className={clsx(title({ size: "sm" }), "mb-7")}>
        {categoryInfo.data[0].attributes.name}
      </h1>
      {categoryInfo.data[0].attributes.child_categories?.data && (
        <CategoriesList
          categories={categoryInfo.data[0].attributes.child_categories?.data}
        />
      )}
    </div>
  );
}
