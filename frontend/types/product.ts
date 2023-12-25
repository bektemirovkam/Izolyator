import { Category } from "@/types/category";
import { Media } from "@/types/media";
import { Seo } from "@/types/seo";

export interface Product {
  id: number;
  attributes: {
    name: string;
    slug: string;
    vendorCode: string;
    description: string;
    category: {
      data: Category;
    };
    seo?: Seo[];
    preview?: {
      data: Media;
    };
  };
}
