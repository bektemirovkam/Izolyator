import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { getContacts } from "@/services/contacts";
import { Footer } from "@/components/footer";
import { getCategoriesTree } from "@/services/categories";
import CatalogSidebar from "@/components/catalogSidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getContacts();
  const categories = await getCategoriesTree();

  return (
    <section className="flex flex-col items-center justify-center py-4 flex-auto">
      <div className="flex flex-col flex-auto xl:flex-row w-full">
        <div className="xl:basis-80 flex-shrink-0">
          <CatalogSidebar categories={categories.data} />
        </div>
        <div className="flex-auto">{children}</div>
      </div>
    </section>
  );
}
