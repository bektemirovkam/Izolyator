import { CategoriesList } from "@/components/categoriesList";
import { ArrowBackIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ProductsList } from "@/components/productsList";
import { getCategoryInfo } from "@/services/categories";
import { getProductsByCategorySlug } from "@/services/products";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}): Promise<Metadata> {
  const categoryInfo = await getCategoryInfo(params.categorySlug);

  return {
    title: categoryInfo.data[0]?.attributes.seo?.title,
    description: categoryInfo.data[0]?.attributes.seo?.description,
  };
}

export default async function CategoryInfoPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const categoryInfo = await getCategoryInfo(params.categorySlug);

  const parentCategorySlug = categoryInfo.data[0]?.attributes.parent?.data?.attributes.slug


  if (categoryInfo.data[0]?.attributes.child_categories?.data.length) {

    return (
      <div className="flex flex-col xl:pl-4">

        <div className="flex mb-7 items-center">
          <Link className="mr-4" href={`${parentCategorySlug ? `/${parentCategorySlug}` : "/"}`}>
            <ArrowBackIcon />
          </Link>  
          <h1 className={clsx(title({ size: "sm" }))}>
          {categoryInfo.data[0].attributes.name}
          </h1>
        </div>

        {categoryInfo.data[0].attributes.child_categories?.data && (
          <CategoriesList
            categories={categoryInfo.data[0].attributes.child_categories?.data}
          />
        )}
      </div>
    );
  }

  const products = await getProductsByCategorySlug(params.categorySlug);

  return (
    <div className="flex flex-col xl:pl-4">
      <div className="flex mb-7 items-center">
        <Link className="mr-4" href={`${parentCategorySlug ? `/${parentCategorySlug}` : "/"}`}>
          <ArrowBackIcon />
        </Link>  
        <h1 className={clsx(title({ size: "sm" }))}>
          {categoryInfo.data[0]?.attributes.name}
        </h1>
      </div>
      <ProductsList products={products.data} />
    </div>
  );
}

export const revalidate = 300;
