import { title } from "@/components/primitives";
import { getProductInfo } from "@/services/products";
import clsx from "clsx";

export default async function ProductInfoPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const productInfo = await getProductInfo(params.productSlug);

  return (
    <div className="flex flex-col pl-4">
      <h1 className={clsx(title({ size: "sm" }), "mb-7")}>
        {productInfo.data[0].attributes.name}
      </h1>
    </div>
  );
}
