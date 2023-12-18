import axios from "@/axios/axios";
import { Category } from "@/types/category";

export const getCategories = async () => {
  const { data } = await axios.post<Category[]>("categories?populate=parent");
  return data;
};

export const getCategoryInfo = async (slug: string) => {
  const { data } = await axios.post<Category[]>(
    `categories?filters[slug]=${slug}&populate=products`
  );
  return data;
};
