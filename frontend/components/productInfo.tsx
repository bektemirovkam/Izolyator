"use client";

import { Gallery } from "@/components/gallery";
import { Product } from "@/types/product";
import Markdown from "react-markdown";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      {product.attributes.gallery?.data && (
        <Gallery gallery={product.attributes.gallery.data} />
      )}
      <h2>VIN-code: {product.attributes.vendorCode}</h2>
      <Markdown>{product.attributes.description}</Markdown>
    </div>
  );
};
