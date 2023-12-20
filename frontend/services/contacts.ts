import axios from "@/axios/axios";
import { MetaStrapiInfo } from "@/types";
import { Contacts } from "@/types/contacts";

export const getContacts = async () => {
  const { data } = await axios.get<{ data: Contacts; meta: {} }>("contact");
  return data;
};
