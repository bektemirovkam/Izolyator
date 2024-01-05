import { ArrowBackIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ProductInfo } from "@/components/productInfo";
import { getProductInfo } from "@/services/products";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Metadata } from "next";

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
}: {
  params: { productSlug: string };
}) {
  const productInfo = await getProductInfo(params.productSlug);

  return (
    <div className="flex flex-col xl:pl-4">
      <div className="flex mb-7 items-center">
        <Link
          className="mr-4"
          href={`/${productInfo.data[0]?.attributes?.category?.data?.attributes.slug}`}
        >
          <ArrowBackIcon />
        </Link>
        <h1 className={clsx(title({ size: "sm" }))}>
          {productInfo.data[0]?.attributes.name}
        </h1>
      </div>
      {productInfo.data[0] && <ProductInfo product={productInfo.data[0]} />}
    </div>
  );
}
