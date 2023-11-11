import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "./Login.css";

const BASEURL = "";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};
  const PostLogIn = async (id, password) => {
    try {
      const res = await axios({
        url: "/login",
        method: "post",
        baseURL: BASEURL,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: id,
          password: password,
        },
      });
      if (res.status === 200) {
      }
      if (res.status === 300) {
      }
    } catch (error) {
      console.log("can't use login system", error);
    }
  };

  return (
    <>
      <div className="">
        <form className="loginoutForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="idInput"
            placeholder="사용자 이름"
            type="text"
            {...register("id")}
          />
          <input
            className="passwordInput"
            placeholder="비밀번호"
            type="text"
            {...register("password")}
          />
          <input className="submitInput" type="submit" value="다음" />
        </form>
      </div>
    </>
  );
}

export default Login;
