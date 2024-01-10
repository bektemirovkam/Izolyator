import axios from "@/axios/axios";
import { cache } from "react";
import { MetaStrapiInfo } from "@/types";
import { Product } from "@/types/product";

export const getSiteMapProducts = cache(async () => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?fields[0]=slug&populate=category`
  );
  return data;
});

export const getProductsByCategorySlug = cache(async (categorySlug: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?populate[0]=category&filters[category][slug][$eq]=${categorySlug}&populate=preview&pagination[pageSize]=1000`
  );
  return data;
});

export const getProductInfo = cache(async (slug: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?filters[slug]=${slug}&populate=seo&populate=category`
  );
  return data;
});

export const searchProducts = async (search: string) => {
  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?filters[$or][0][vendorCode][$contains]=${search}&filters[$or][1][name][$contains]=${search}&filters[$or][2][description][$contains]=${search}&populate=category&populate=preview&pagination[pageSize]=10000`
  );
  return data;
};