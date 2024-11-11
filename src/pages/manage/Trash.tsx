import { useTitle } from "ahooks";
import React, { FC, useState, useEffect } from "react";
import styles from "./common.module.scss";
import { Typography, Empty, Table, Tag } from "antd";

const { Title } = Typography;

const rawQuestionList = [
  {
    _id: "q1",
    title: "Question 1",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createAt: "3月11日 13:23",
  },
  {
    _id: "q2",
    title: "Question 2",
    isPublished: true,
    isStar: false,
    answerCount: 3,
    createAt: "3月12日 13:23",
  },
  {
    _id: "q3",
    title: "Question 1",
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createAt: "3月9日 13:23",
  },
];

const Trash: FC = () => {
  useTitle("Robin Questionary - Recycle Box");

  const [questionList, setQuestionList] = useState(rawQuestionList);

  const tableColumns = [
    {
      title: "Title",
      dataIndex: "title",
      // key: 'title'
    },
    {
      title: "Published or Not",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing"> Published </Tag>
        ) : (
          <Tag> Not Published </Tag>
        );
      },
    },
    {
      title: "Anwser Count",
      dataIndex: "answerCount",
    },
    {
      title: "Created At",
      dataIndex: "createAt",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Recycle Box</Title>
        </div>
        <div className={styles.right}> (Search) </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="No Data" />}
        {questionList.length > 0 && (
          <Table
            dataSource={questionList}
            columns={tableColumns}
            pagination={false}
          />
        )}
      </div>
    </>
  );
};

export default Trash;