import { Media } from "@/types/media";
import { Product } from "@/types/product";
import { Seo } from "@/types/seo";

export interface Category {
  id: number;
  attributes: {
    name: string;
    description: string | null;
    preview?: {
      data: Media;
    };
    seo?: Seo;
    slug: string;
    products?: {
      data: Product[];
    };
    parent?: ParentCategory;
    child_categories?: {
      data: Category[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    createdBy?: string;
    updatedBy?: string;
  };
}

export interface ParentCategory {
  data: Category | null;
}
