import { BreadCrumbPathName, Breadcrumbs } from "@/components/breadCrumbs";
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

  const parentCategorySlug =
    categoryInfo.data[0]?.attributes.parent?.data?.attributes.slug;

  const parentCategoryName =
    categoryInfo.data[0]?.attributes.parent?.data?.attributes.name;

  let pathNames: BreadCrumbPathName[] = [
    {
      title: `${categoryInfo.data[0]?.attributes.name}`,
      link: `/${categoryInfo.data[0]?.attributes.slug}`,
    },
  ];

  if (parentCategorySlug && parentCategoryName) {
    pathNames = [
      { title: parentCategoryName, link: `/${parentCategorySlug}` },
      ...pathNames,
    ];
  }

  if (categoryInfo.data[0]?.attributes.child_categories?.data.length) {
    return (
      <div className="flex flex-col xl:pl-4">
        <div className="flex mb-7 items-center">
          <Link
            className="mr-4"
            href={`${parentCategorySlug ? `/${parentCategorySlug}` : "/"}`}
          >
            <ArrowBackIcon />
          </Link>
          <h1 className={clsx(title({ size: "sm" }))}>
            {categoryInfo.data[0].attributes.name}
          </h1>
        </div>

        <Breadcrumbs
          homeElement={"Каталог"}
          separator={<span> | </span>}
          activeClasses="text-brand-color"
          containerClasses="flex pb-4"
          listClasses="hover:underline mx-2 font-bold"
          pathNames={pathNames}
        />

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
        <Link
          className="mr-4"
          href={`${parentCategorySlug ? `/${parentCategorySlug}` : "/"}`}
        >
          <ArrowBackIcon />
        </Link>
        <h1 className={clsx(title({ size: "sm" }))}>
          {categoryInfo.data[0]?.attributes.name}
        </h1>
      </div>
      <Breadcrumbs
        homeElement={"Каталог"}
        separator={<span> | </span>}
        activeClasses="text-brand-color"
        containerClasses="flex pb-4"
        listClasses="hover:underline mx-2 font-bold"
        pathNames={pathNames}
      />
      <ProductsList products={products.data} />
    </div>
  );
}

export const revalidate = 300;
