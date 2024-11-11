import React, { FC, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { MANAGE_INDEX_PATHNAME } from "../router";
import styles from "./Home.module.scss";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();

  // function clickHandler() {
  //   // nav('/login?b=20')
  //   nav({
  //     pathname: "/login",
  //     search: "b=21",
  //   });
  // }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Questionary | Vote Online</Title>
        <Paragraph>Already Created 100 Pages</Paragraph>
      </div>
      <div>
        <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
