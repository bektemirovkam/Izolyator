"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex  border-t-2 py-5">
      <ul className="basis-full flex justify-around items-center">
        {siteConfig.navItems.map((item) => (
          <li key={item.href}>
            <Link
              className={clsx(
                "font-normal",
                linkStyles({ color: "foreground" }),
                {
                  "text-brand-color": item.href === pathname,
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
