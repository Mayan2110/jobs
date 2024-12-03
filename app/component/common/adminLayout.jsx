"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Content, Sider } = Layout;

const Adminlayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  const menuItems = [
    {
      key: "/admin/dashboard",
      label: (
        <Link className="text-xl" href={"/admin/dashboard"}>
          {" "}
          Dashboard{" "}
        </Link>
      ),
    },
    {
      key: "/admin/jobs",
      label: (
        <Link className="text-xl" href={"/admin/jobs"}>
          {" "}
          Jobs{" "}
        </Link>
      ),
    },
    {
      key: "/admin/job-application",
      label: (
        <Link className="text-xl" href={"/admin/job-application"}>
          {" "}
          Job Application{" "}
        </Link>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
          position: "fixed",
          height: "100vh",
          overflow: "auto",
          left: 0,
        }}
      >
        <Menu mode="inline" selectedKeys={[pathname]} items={menuItems} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          padding: "24px 16px",
          background: "#f0f2f5",
        }}
      >
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Adminlayout;
