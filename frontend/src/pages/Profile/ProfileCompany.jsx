import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { offers } from "./offers";

import "./ProfileCompany.css";
import Layout from "../../components/layout/Layout";

import axios from "axios";

import {
  GridElementWrapper,
  GridElementWrapperRight,
  GridWrapper,
  WhiteContainer,
  WhiteContainerEdit,
  full,
  left,
  right,
} from "../../components/Profile/Layout";
import {
  EditCompanyOne,
  EditCompanyTwo,
} from "../../components/Profile/EditCompany";

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

  const handleChange = ({ key, value }) => {
    console.log(key, value);
    setCompanyInfo((prevCompanyInfo) => {
      const updatedCompanyInfo = { ...prevCompanyInfo, [key]: value };
      return updatedCompanyInfo;
    });
  };

  const [submitInfo, setSubmitInfo] = useState({});

  return (
/*     <Layout style={{ rowGap: "2rem" }}>
      <WhiteContainerEdit
        overlayChildren={
          <EditCompanyOne
            companyInfo={companyInfo}
            handleChange={handleChange}
            setSubmitInfo={setSubmitInfo}
          />
        }
      >
<<<<<<< HEAD
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
=======
        <GridWrapper container>
          <GridElementWrapper item xs={left}>
            <div
              style={{
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid var(--purple4)",
                borderRadius: "100px",
                overflow: "hidden",
              }}
            >
              <img
                src="/logo.jpg"
                style={{ width: "90%" }}
                alt={`로고 이미지 - ${companyInfo.name}`}
              />
            </div>
          </GridElementWrapper>

          <GridElementWrapperRight item xs={right}>
            <GridWrapper container>
              <GridElementWrapper item xs={full}>
                <h3 style={{ lineHeight: "0" }}>{companyInfo.name}</h3>
              </GridElementWrapper>

              <GridElementWrapper item xs={12}>
                {companyInfo.introduce}
              </GridElementWrapper>
            </GridWrapper>
          </GridElementWrapperRight>
        </GridWrapper>

        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>관심분야</h3>
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <GridWrapper container>
              {companyInfo.interestedFields.map((field, index) => (
                <GridElementWrapper
                  key={index}
                  style={{
                    margin: "0rem 1rem 1rem 0rem",
                    padding: "0.8rem 2rem",
                    backgroundColor: "var(--purple2)",
                    color: "var(--white)",
                    borderRadius: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  # {field}
                </GridElementWrapper>
              ))}
            </GridWrapper>
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainerEdit>
      <WhiteContainerEdit
        overlayChildren={
          <EditCompanyTwo
            companyInfo={companyInfo}
            handleChange={handleChange}
          />
        }
        setSubmitInfo={setSubmitInfo}
      >
        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>
              공고: <b>{companyInfo.jobTitle}</b>
            </h3>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <div style={{ display: "flex", columnGap: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                <b>직무 설명</b>
                <b>졸업 후 필수 근무 기간</b>
                <b>방학 기간 내 의무 근로 여부</b>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                <div>{companyInfo.jobDescription}</div>
                <div>{companyInfo.workYears}년</div>
                <div>{companyInfo.vaca ? "예" : "아니요"}</div>
              </div>
            </div>
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainerEdit>
>>>>>>> origin/hyuna2
    </Layout> */ );
}

export default ProfileCompany;
