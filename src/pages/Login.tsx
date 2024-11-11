import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const nav = useNavigate();

  return (
    <>
      <p>Login Page</p>
      <div>
        <button onClick={() => nav(-1)}> Return </button>
      </div>
    </>
  );
};

export default Login;
