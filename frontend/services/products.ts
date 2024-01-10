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

  const searchParts = search.split(" ")

  const searchParams: string[] = []

  searchParts.forEach((searchPart, index) => {
    searchParams.push(`filters[$or][${index * 2 + 1}][vendorCode][$contains]=${searchPart}&filters[$or][${index * 2 + 2}][name][$contains]=${searchPart}`
    )
  })


  const { data } = await axios.get<{ data: Product[]; meta: MetaStrapiInfo }>(
    `products?filters[$or][0][description][$contains]=${search}&${searchParams.join("&")}&populate=category&populate=preview&pagination[pageSize]=10000`
  );
  return data;
};
