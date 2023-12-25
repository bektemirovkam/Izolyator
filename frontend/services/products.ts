import axios from "@/axios/axios";
import { MetaStrapiInfo } from "@/types";
import { Product } from "@/types/product";

export const getProductsByCategorySlug = async (categorySlug: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?populate[0]=category&filters[category][slug][$eq]=${categorySlug}&populate=preview`
  );
  return data;
};

export const getProductInfo = async (slug: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?filters[slug]=${slug}&populate=seo`
  );
  return data;
};

export const searchProducts = async (search: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?filters[$or][0][vendorCode][$contains]=${search}&filters[$or][1][name][$contains]=${search}&populate=category&populate=preview`
  );
  return data;
};
