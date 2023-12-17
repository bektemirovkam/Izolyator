"use client";
import { Grid, Layout, Menu, MenuProps, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const navbarItems: MenuProps["items"] = [
  { title: "Главная", link: "/" },
  { title: "Каталог", link: "/catalog" },
  { title: "Доставка и оплата", link: "/delivery" },
  { title: "Контакты", link: "/contacts" },
].map(({ title, link }) => ({
  key: link,
  label: <Link href={link}>{title}</Link>,
}));

export const AppHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = usePathname();
  const { sm, md } = useBreakpoint();

  return (
    <Layout>
      <Header
        style={{
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          padding: md ? "0 50px" : "0 20px",
        }}
      >
        <Link
          href="/"
          style={{
            marginRight: 20,
            display: sm ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Пром поставки"
            width={120}
            height={60}
          />
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          items={navbarItems}
          style={{
            background: colorBgContainer,
            flex: 1,
            justifyContent: sm ? "flex-end" : "center",
            fontSize: sm ? 16 : 14,
            width: "100%",
          }}
        />
      </Header>
    </Layout>
  );
};
