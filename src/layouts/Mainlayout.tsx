import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./Mainlayout.module.scss";
import Logo from "../components/Logo";

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>Logo</div>
        <div className={styles.right}>Log in</div>
        <Logo />
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        Robin Questionary &copy;2024 - present. Created by Robin Lang
      </Footer>
    </Layout>
  );
};

export default MainLayout;
