import React from "react";

import { Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Content, Sider } = Layout;

const Adminlayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="mt-5">
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
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
                    jobs
                  </Link>
                ),
              },
              {
                key: "2",
                label: (
                  <Link className="text-xl" href={"/admin/job-application"}>
                    job Application
                  </Link>
                ),
              },
            ]}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Adminlayout;
