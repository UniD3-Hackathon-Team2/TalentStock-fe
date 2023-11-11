import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

import "./Main.css";
import { Context } from "react";

import Layout from "../../components/layout/Layout";

const BASEURL = "";

function Main() {
  const { userState, SetUserState, userId, SetUserId } = useContext;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [recommendedStudents, SetRecommendedStudents] = useState([
    {
      name: "test",
      university: "test",
      department: "test",
      grade: 1,
      short_introduce: "test",
    },
  ]);

  const RecommendedStudents = async () => {
    try {
      const res = await axios({
        url: "/recomendedstudents",
        method: "get",
        headers: {
          id: userId,
        },
        baseURL: BASEURL,
        responseType: "json",
      });
      if (res.status === 200) SetRecommendedStudents(res.data);
    } catch (error) {
      console.log("can't use RecommendedStudents system", error);
    }
  };

  useEffect(() => {
    RecommendedStudents();
  }, []);

  const interestsList = [
    "운영체제",
    "네트워크",
    "보안",
    "데이터베이스",
    "인공지능",
    "블록체인",
    "가상현실",
    "프론트엔드",
    "백엔드",
  ];

  const universityList = [
    "중앙대학교",
    "성균관대학교",
    "카이스트",
    "숙명여자대학교",
    "포항공과대학교",
    "고려대학교",
    "연세대학교",
  ];

  const departmentList = [
    "컴퓨터공학과",
    "스프트웨어학과",
    "전산학과",
    "인공지능학과",
    "컴퓨터과학과",
    "사이버보안학과",
    "응용통계학과",
  ];

  return (
    <Layout>
      <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
        <select className="leftSelect" {...register("interests")}>
          <option value={null}>관심 분야 선택</option>
          {interestsList.map((category, index) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <select {...register("university")}>
          <option value={null}>대학교 선택</option>
          {universityList.map((category, index) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <select {...register("department")}>
          <option value={null}>학과 선택</option>
          {departmentList.map((category, index) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <select {...register("department")}>
          <option value={null}>학년 선택</option>
          <option value={"1학년"}>1학년</option>
          <option value={"2학년"}>2학년</option>
          <option value={"3학년"}>3학년</option>
          <option value={"4학년"}>4학년</option>
        </select>
        <button className="submitInput" type="submit">
          <SearchIcon />
        </button>
      </form>
      <div className="recommendedStudentsDiv">
        <AccountCircleIcon className="peson" sx={{ fontSize: "9rem" }} />
        <div className="infoDiv">
          <span className="name">{recommendedStudents[0].name}</span>
        </div>
      </div>
      <div className="recommendedStudentsDiv">
        <AccountCircleIcon className="peson" sx={{ fontSize: "9rem" }} />
        <div></div>
      </div>
    </Layout>
  );
}

export default Main;
