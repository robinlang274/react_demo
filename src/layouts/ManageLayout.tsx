import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button, Space, Divider } from "antd";
import styles from "./ManageLayout.module.scss";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Create Questionary
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav("/manage/list")}
          >
            My Questionary
          </Button>
          <Button
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav("/manage/star")}
          >
            Starred Questionary
          </Button>
          <Button
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav("/manage/trash")}
          >
            Recycle Box
          </Button>
        </Space>
      </div>
      <div className="styles.right">
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
