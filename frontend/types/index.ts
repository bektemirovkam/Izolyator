import { SVGProps } from "react";

export interface MetaStrapiInfo {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
