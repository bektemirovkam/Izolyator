"use client";
import { Layout, Menu, theme } from "antd";
const { Header } = Layout;
import Link from "next/link";
import Image from "next/image";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const navbarItems: ItemType<MenuItemType>[] = [
  "Главная",
  "Каталог",
  "Доставка и оплата",
  "Контакты",
].map((i) => ({ key: i, label: i }));

const defaultSelectedKeys = ["1"];

export const AppHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            marginRight: 20,
            display: "flex",
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
          defaultSelectedKeys={defaultSelectedKeys}
          items={navbarItems}
          style={{
            background: colorBgContainer,
            flex: 1,
            justifyContent: "flex-end",
          }}
        />
      </Header>
    </Layout>
  );
};
