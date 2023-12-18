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
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className={styles.navbarContent} justify="start">
        <NavbarBrand as="li" className={styles.navbarBrand}>
          <NextLink className={styles.logoLink} href="/">
            <Image src="/logo.png" alt="Промоставки" width={200} height={30} />
          </NextLink>
        </NavbarBrand>
        <ul className={styles.navMenuDesktop}>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                // color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
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
