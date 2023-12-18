import axios from "@/axios/axios";
import { Category } from "@/types/category";

export const getCategories = async () => {
  const { data } = await axios.get<Category[]>("categories?populate=parent");
  return data;
};

export const getCategoryInfo = async (slug: string) => {
  const { data } = await axios.get<Category[]>(
    `categories?filters[slug]=${slug}&populate=products`
  );
  return data;
};

export const getTopCategories = async () => {
  const { data } = await axios.get<Category[]>(
    "categories?filters[parent][id][$null]=true&populate=preview"
  );
  return data;
};
