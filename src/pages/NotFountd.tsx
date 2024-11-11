import React, { FC, useState, useEffect } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME } from "../router";

const NotFound: FC = () => {
  const nav = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="sorry, your page does not exist"
      extra={
        <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
          Return to HomePage
        </Button>
      }
    ></Result>
  );
};

export default NotFound;
