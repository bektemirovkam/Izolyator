"use client";

import { nonCatalogRoutes } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex  border-t-2 py-5">
      <ul className="basis-full flex justify-around items-center flex-wrap sm:flex-nowrap">
        {siteConfig.navItems.map((item) => (
          <li key={item.href} className="mr-2 last:mr-0">
            <Link
              className={clsx(
                "font-normal",
                linkStyles({ color: "foreground" }),
                "text-xs sm:text-sm md:text-base",
                {
                  "text-brand-color":
                    item.href === "/"
                      ? !nonCatalogRoutes.includes(pathname)
                      : pathname.includes(item.href),
                }
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
