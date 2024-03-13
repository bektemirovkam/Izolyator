"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface BreadCrumbPathName {
  title: string;
  link: string;
}

interface BreadCrumbProps {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  pathNames: BreadCrumbPathName[];
}

export const Breadcrumbs = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  pathNames,
}: BreadCrumbProps) => {
  const paths = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1040px)");

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((pathItem, index) => {
          let itemClasses =
            paths === pathItem.link
              ? `${listClasses} ${activeClasses}`
              : listClasses;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={pathItem.link}>{pathItem.title}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
