"use client";

import { Category } from "@/types/category";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface CatalogSidebarProps {
  categories: Category[];
}

interface CategorySideBarItemProps {
  category: Category;
  pathname: string;
  isTop?: boolean;
}

const CategorySideBarItem = ({
  category,
  pathname,
  isTop,
}: CategorySideBarItemProps) => {
  return (
    <li
      className={clsx({
        "p-2": isTop,
        "mt-2": isTop,
        "border-b-small": isTop,
        "last:border-none": isTop,
      })}
    >
      <Link
        color="foreground"
        href={`/catalog/${category?.attributes?.slug}`}
        size="lg"
        className={clsx("text-xs", linkStyles({ color: "foreground" }), {
          "text-brand-color":
            category?.attributes?.slug &&
            pathname.split("/").splice(-1, 1)[0] === category.attributes.slug,
          "font-semibold": isTop,
        })}
      >
        {category?.attributes?.name}
      </Link>
      {category.attributes.child_categories?.data && (
        <ul className="ml-4 list-disc">
          {category.attributes.child_categories?.data.map((c) => (
            <CategorySideBarItem category={c} key={c.id} pathname={pathname} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const CatalogSidebar = ({ categories }: CatalogSidebarProps) => {
  const pathname = usePathname();

  return (
    <Accordion className="w-full px-0" selectedKeys={["1"]}>
      <AccordionItem
        hideIndicator
        classNames={{
          title: "uppercase p-2 text-white bg-brand-color",
          trigger: "p-0 mb-4",
        }}
        title="Каталог продукции"
        key="1"
      >
        <ul className=" border-small p-2">
          {categories.map((c) => (
            <CategorySideBarItem
              category={c}
              pathname={pathname}
              key={c.id}
              isTop
            />
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
};
