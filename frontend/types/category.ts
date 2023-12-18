import { Media } from "@/types/media";
import { Seo } from "@/types/seo";

export interface Category
  extends Partial<{
    id: number;
    attributes: {
      name: string;
      description: string;
      preview: Media;
      seo: Seo;
      slug: string;
      products: any;
      parent: ParentCategory;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      createdBy: string;
      updatedBy: string;
    };
  }> {}

export interface ParentCategory {
  data: Category | null;
}
