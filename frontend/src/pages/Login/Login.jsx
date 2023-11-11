import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Login.css";

import { context } from "../../App";

const BASEURL = "http://43.202.86.217/api/v1/member";

function Login() {
  const { userState, SetUserState } = useContext(context);
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
      console.log(res.data);
      if (res.data.isSuccess) {
        navigate("/main");
      }
    } catch (error) {
      console.log("can't use login system", error);
    }
  };

  return (
    <>
      <div className="loginbackground">
        <div className="loginoutFormDiv">
          <form className="loginoutForm" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/main">
              <img src={"img/logo.jpg"} width={350} />
            </Link>
            <span className="mainLabel">로그인</span>
            <span className="label">이메일</span>
            <input className="idInput" type="text" {...register("id")} />
            <span className="label">비밀번호</span>
            <input
              className="passwordInput"
              type="text"
              {...register("password")}
            />

            <button className="button">이메일 비밀번호 찾기</button>
            <button className="button">회원가입</button>
            <input className="submitInput" type="submit" value="다음" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
