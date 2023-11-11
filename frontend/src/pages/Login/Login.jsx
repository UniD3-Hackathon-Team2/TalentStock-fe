import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Login.css";

import { context } from "../../App";
import LoginLayout from "../../components/layout/LoginLayout";

const BASEURL = "http://43.202.86.217/api/v1/member";

function Login() {
  const { userId, SetUserId, userType, setUserType } = useContext(context);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    PostLogIn(data.id, data.password);
  };
  const PostLogIn = async (id, password) => {
    try {
      const res = await axios({
        url: "/login",
        method: "post",
        baseURL: BASEURL,
        data: {
          id: id,
          pw: password,
        },
      });
      console.log(res.data.result.memberId);
      if (res.data.isSuccess) {
        setUserType(res.data.result.memberType.toLowerCase());
        SetUserId(res.data.result.memberId);
        navigate("/main");
      }
    } catch (error) {
      console.log("can't use login system", error);
    }
  };

  return (
    <LoginLayout>
      <form
        style={{ color: "white" }}
        className="loginoutForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>로그인</h1>
        <div style={{ display: "flex" }}>
          <h3 className="label">이메일</h3>
          <input
            className="idInput"
            type="text"
            {...register("id")}
            style={{
              padding: "0.5rem",
              marginLeft: "1rem",
              borderRadius: "2rem",
              width: "260px",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h3 className="label">비밀번호</h3>
          <input
            className="passwordInput"
            type="password"
            {...register("password")}
            style={{
              padding: "0.5rem",
              marginLeft: "1rem",
              borderRadius: "2rem",
              width: "260px",
            }}
          />
        </div>

        <button className="button">이메일 비밀번호 찾기</button>
        <button className="button">회원가입</button>
        <input className="submitInput" type="submit" value="다음" />
      </form>
    </LoginLayout>
  );
}

export default Login;
