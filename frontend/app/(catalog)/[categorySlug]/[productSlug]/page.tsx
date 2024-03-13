import { BreadCrumbPathName, Breadcrumbs } from "@/components/breadCrumbs";
import { ArrowBackIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ProductBackBtn } from "@/components/productBackBtn";
import { ProductInfo } from "@/components/productInfo";
import { getProductInfo } from "@/services/products";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { productSlug: string };
}): Promise<Metadata> {
  const productInfo = await getProductInfo(params.productSlug);

  return {
    title: productInfo.data[0]?.attributes.seo?.[0]?.title,
    description: productInfo.data[0]?.attributes.seo?.[0]?.description,
  };
}

export default async function ProductInfoPage({
  params,
  searchParams,
}: {
  params: { productSlug: string };
  searchParams: { returnUrl?: string };
}) {
  const productInfo = await getProductInfo(params.productSlug);
  const returnUrl = searchParams.returnUrl;

  const categoryUrl = `/${productInfo?.data[0]?.attributes?.category?.data?.attributes.slug}`;
  const categoryName = `${productInfo?.data[0]?.attributes?.category?.data?.attributes.name}`;

  const pathNames: BreadCrumbPathName[] = [
    {
      title: categoryName,
      link: categoryUrl,
    },
    {
      title: `${productInfo?.data[0]?.attributes.name}`,
      link: `${categoryUrl}/${productInfo?.data[0]?.attributes.slug}`,
    },
  ];

  return (
    <div className="flex flex-col xl:pl-4">
      <div className="flex mb-7 items-center">
        <ProductBackBtn
          url={categoryUrl}
          returnUrl={
            returnUrl ? `/${returnUrl}#${params.productSlug}` : undefined
          }
        />
        <h1 className={clsx(title({ size: "sm" }))}>
          {productInfo.data[0]?.attributes.name}
        </h1>
      </div>
      <Breadcrumbs
        homeElement={"Каталог"}
        separator={<span> | </span>}
        activeClasses="text-brand-color"
        containerClasses="flex pb-4"
        listClasses="hover:underline mx-2 font-bold truncate"
        pathNames={pathNames}
      />
      {productInfo.data[0] && <ProductInfo product={productInfo.data[0]} />}
    </div>
  );
}
