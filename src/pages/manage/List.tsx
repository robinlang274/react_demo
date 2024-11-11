import { useTitle } from "ahooks";
import React, { FC, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import styles from "./common.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

const rawQuestionList = [
  {
    _id: "q1",
    title: "Question 1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: "3月11日 13:23",
  },
  {
    _id: "q2",
    title: "Question 2",
    isPublished: true,
    isStar: true,
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
  {
    _id: "q4",
    title: "Question 1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: "3月10日 13:23",
  },
];
const List: FC = () => {
  useTitle("Robin Questionary - My Questionary");
  // const [serachParam] = useSearchParams()
  // console.log('keyword', serachParam.get('keyword'))

  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>My Questionary</Title>
        </div>
        <div className={styles.right}> (Search) </div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}> Load more ... </div>
    </>
  );
};

export default List;
