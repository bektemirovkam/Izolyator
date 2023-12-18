"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import Image from "next/image";

import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:-bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-brand-color",
        ],
      }}
    >
      <NavbarContent className={styles.navbarContent} justify="start">
        <NavbarBrand as="li" className={styles.navbarBrand}>
          <Link className={styles.logoLink} href="/">
            <Image src="/logo.png" alt="Промоставки" width={320} height={201} />
          </Link>
        </NavbarBrand>
        <ul className={styles.navMenuDesktop}>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === pathname}>
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
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className={clsx("md:hidden", styles.navbarTogglerWrapper)}
        justify="end"
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className={styles.navMenuMobile}>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
