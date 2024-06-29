"use client";
import React, { useContext, useState } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

export default function AdminLayout({ children }: any) {
  const router = useRouter();
  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [getItem(<Link href={"/admin/admin_home"}>Anasayfa</Link>, "/admin/admin_home", <PieChartOutlined />), getItem("Profil", "2", <DesktopOutlined />), getItem("Firma İşlemleri", "sub1", <UserOutlined />, [getItem(<Link href={"/admin/create_company"}>Firma Oluştur</Link>, "3"), getItem(<Link href={"/admin/company_list"}>Firma Listesi</Link>, "4"), getItem("Alex", "5")]), getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", "8")]), getItem("Files", "9", <FileOutlined />)];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className=" min-h-screen h-fit ">
        <Sider
          className="border-r-2"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{ padding: 0 }}
            className="bg-white dark:bg-slate-800 border-b-2 border-amber-50"
          >
            <h1
              className="text-2xl font-bold"
              style={{ margin: "20px 24px 0" }}
            >
              {" "}
              Yükle Admin Paneli{" "}
            </h1>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
}
