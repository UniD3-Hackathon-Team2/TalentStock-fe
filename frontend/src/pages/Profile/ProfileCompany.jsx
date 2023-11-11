import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { offers } from "./offers";

import "./ProfileCompany.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASEURL = "http://43.202.86.217/api/v1";

function ProfileCompany() {
  const parame = useParams();
  const id = parame.id;

  const GetUseInfo = async () => {
    try {
      const res = await axios({
        url: `/member/${id}`,
        method: "get",
        baseURL: BASEURL,
      });

      console.log(res.data.result);

      if (res.status === 200) SetDatas(res.data.result);
    } catch (error) {
      console.log("can't use user info system", error);
    }
  };

  useEffect(() => {
    GetUseInfo();
  }, []);

  const [datas, SetDatas] = useState({
    email: "",
    explanation: "",
    isCompulsoryWork: false,
    memberType: "",
    mustWorkingYear: 0,
    name: "",
    position: "",
    positionExplanation: "",
    scholarship: 19258426,
  });

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "80%",
          margin: "auto",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <ul>
          <div
            style={{
              margin: "auto",
              width: "80%",
              backgroundColor: "#ffffff",
              textAlign: "center",
            }}
          >
            <img
              src="img/logo.jpg"
              style={{ margin: "auto", width: "90%", border: "5px solid" }}
              alt={`로고 이미지 - ${datas.name}`}
            />
          </div>
          <div class="index">기업명</div>
          <div
            class="contents"
            style={{ height: "100px", textAlign: "center" }}
          >
            {datas.name}
          </div>
          <div class="index">관심분야</div>
          <div
            class="contents"
            style={{ height: "200px", textAlign: "center" }}
          >
            {datas.tagList}
          </div>
          <div>
            <div class="container">
              <div class="index-1">방학 기간 내 의무 근로 여부</div>
              <div class="contents">
                <span>{datas.isCompulsoryWork}</span>
              </div>
            </div>
            <div class="container">
              <div class="index-1">졸업 후 의무 근로 년수</div>
              <div class="contents">
                <span>{datas.mustWorkingYear}</span>
              </div>
            </div>
            <div class="container">
              <div class="index-1">필요 직무</div>
              <div class="contents" style={{ textAlign: "center" }}>
                {datas.positionExplanation}
              </div>
            </div>
          </div>
        </ul>
      </div>
    </Layout>
  );
}

export default ProfileCompany;
