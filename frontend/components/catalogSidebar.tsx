"use client";

import { Category } from "@/types/category";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useMemo } from "react";

interface CatalogSidebarProps {
  categories: Category[];
}

interface CategorySideBarItemProps {
  category: Category;
  pathname: string;
}

const CategorySideBarItem = ({
  category,
  pathname,
}: CategorySideBarItemProps) => {
  console.log("pathname --> ", pathname);

  return (
    <li>
      <Link
        color="foreground"
        href={`/catalog/${category?.attributes?.slug}`}
        size="lg"
        className={clsx("font-normal", linkStyles({ color: "foreground" }), {
          "text-brand-color":
            category?.attributes?.slug &&
            pathname.includes(category?.attributes?.slug),
        })}
      >
        {category?.attributes?.name}
      </Link>
    </li>
  );
};

export const CatalogSidebar = ({ categories }: CatalogSidebarProps) => {
  const pathname = usePathname();

  const mainCategories = useMemo(
    () => categories.filter((c) => !c?.attributes?.parent.data),
    [categories]
  );

  return (
    <ul className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      {categories.map((c) => (
        <CategorySideBarItem pathname={pathname} category={c} key={c.id} />
      ))}
    </ul>
  );
};
