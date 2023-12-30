"use client";

import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
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
      <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]} className="mardown">
        {product.attributes.description}
      </Markdown>
    </div>
  );
};
