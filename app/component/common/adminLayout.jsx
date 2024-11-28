"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Content, Sider } = Layout;

const Adminlayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
          position: "fixed", // Make the sidebar sticky
          height: "100vh", // Full height for sticky effect
          overflow: "auto", // Allow scrolling for sidebar content if necessary
          left: 0, // Align to the left
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: (
                <Link className="text-xl" href={"/admin/jobs"}>
                  Jobs
                </Link>
              ),
            },
            {
              key: "2",
              label: (
                <Link className="text-xl" href={"/admin/job-application"}>
                  Job Application
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200, // Offset for the fixed sidebar
          padding: "24px 16px",
          background: "#f0f2f5", // Neutral background for content area
        }}
      >
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto", // Enable scrolling for overflowing content
            maxHeight: "100vh", // Ensure the content area fits within the viewport
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Adminlayout;
