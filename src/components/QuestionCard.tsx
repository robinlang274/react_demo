import React, { FC, useEffect } from "react";
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from "antd";
import styles from "./QuestionCard.module.scss";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const { confirm } = Modal;

type PropsType = {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate();
  const { _id, title, createAt, answerCount, isPublished, isStar } = props;

  function duplicate() {
    message.success("Processing Copy");
  }

  function del() {
    confirm({
      title: "Confirm to Delete?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success("Deleted"),
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing"> Published </Tag>
            ) : (
              <Tag> Not Published </Tag>
            )}
            <span>Answer Count: {answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>

      <Divider style={{ margin: "12px 0" }} />

      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              Edit
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              Analyse
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" icon={<StarOutlined />} size="small">
              {isStar ? "UnStar" : "Star"}
            </Button>
            <Popconfirm
              title="Confirm to Copy?"
              okText="Confirm"
              cancelText="Cancel"
              onConfirm={duplicate}
            >
              <Button type="text" icon={<CopyOutlined />} size="small">
                Copy
              </Button>
            </Popconfirm>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              onClick={del}
            >
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
