import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { getContacts } from "@/services/contacts";
import { Footer } from "@/components/footer";
import { YandexMetrika } from "@/components/yandexMetrika";
import { Image } from "@nextui-org/react";

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

  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <YandexMetrika />
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen px-4">
            <Navbar contacts={data.data} />
            {children}
            <Image src="./bg.png" alt="Баннер" width={"100%"} />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
