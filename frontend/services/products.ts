import axios from "@/axios/axios";
import { Product } from "@/types/product";

export const getProductsByCategorySlug = async (categorySlug: string) => {
  const { data } = await axios.post<Product[]>(
    `products?category.slug=${categorySlug}`
  );
  return data;
};

export const getProductInfo = async (slug: string) => {
  const { data } = await axios.post<Product[]>(
    `products?filters[slug]=${slug}`
  );
  return data;
};
