import { title } from "@/components/primitives";
import { ProductInfo } from "@/components/productInfo";
import { getProductInfo } from "@/services/products";
import clsx from "clsx";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productSlug: string };
}): Promise<Metadata> {
  const productInfo = await getProductInfo(params.productSlug);

  return {
    title: productInfo.data[0]?.attributes.seo?.[0].title,
    description: productInfo.data[0]?.attributes.seo?.[0].description,
  };
}

export default async function ProductInfoPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const productInfo = await getProductInfo(params.productSlug);

  return (
    <div className="flex flex-col pl-4">
      <h1 className={clsx(title({ size: "sm" }), "mb-7")}>
        {productInfo.data[0]?.attributes.name}
      </h1>
      {productInfo.data[0] && <ProductInfo product={productInfo.data[0]} />}
    </div>
  );
}
