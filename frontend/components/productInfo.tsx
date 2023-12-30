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
      <h2 className="font-bold mb-4 text-lg hidden">
        VIN-code: {product.attributes.vendorCode}
      </h2>
      <Markdown className="mardown">{product.attributes.description}</Markdown>
    </div>
  );
};
