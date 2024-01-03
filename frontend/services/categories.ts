import axios from "@/axios/axios";
import { cache } from "react";
import { MetaStrapiInfo } from "@/types";
import { Category } from "@/types/category";

export const getSiteMapCategories = cache(async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories"
  );
  return data;
});

export const getCategories = cache(async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?populate=parent&populate=child_categories"
  );
  return data;
});

export const getCategoryInfo = cache(async (slug: string) => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    `categories?filters[slug]=${slug}&populate[child_categories][populate]=preview&populate=seo&populate[parent]=slug`
  );
  return data;
});

export const getCategoriesTree = cache(async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?filters[parent][id][$null]=true&populate[child_categories][populate]=child_categories"
  );
  return data;
});

export const getTopListCategories = cache(async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?filters[parent][id][$null]=true&populate=preview"
  );
  return data;
});
