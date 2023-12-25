import axios from "@/axios/axios";
import { MetaStrapiInfo } from "@/types";
import { Category } from "@/types/category";

export const getCategories = async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?populate=parent&populate=child_categories"
  );
  return data;
};

export const getCategoryInfo = async (slug: string) => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    `categories?filters[slug]=${slug}&populate[child_categories][populate]=preview&populate=seo`
  );
  return data;
};

export const getCategoriesTree = async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?filters[parent][id][$null]=true&populate[child_categories][populate]=child_categories"
  );
  return data;
};
export const getTopListCategories = async () => {
  const { data } = await axios.get<{ data: Category[]; meta: MetaStrapiInfo }>(
    "categories?filters[parent][id][$null]=true&populate=preview"
  );
  return data;
};
