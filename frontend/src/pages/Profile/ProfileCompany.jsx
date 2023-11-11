import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProfileCompany.css";
import Layout from "../../components/layout/Layout";
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

function ProfileCompany() {
  const [companyInfo, setCompanyInfo] = useState({
    pid: 0,
    info: "random",
    name: "삼성",
    introduce: "저희는 어쩌구 저쩌구",
    interestedFields: [
      "관심1",
      "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁ",
      "ㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁㅁ",
    ],
    jobTitle: "프런트앤드 개발자",
    jobDescription: "프런트앤드 개발자, 이걸 합니다",
    vaca: true,
    workYears: 100000,
  });

  const params = useParams();
  console.log(params);

  const handleChange = ({ key, value }) => {
    console.log(key, value);
    setCompanyInfo((prevCompanyInfo) => {
      const updatedCompanyInfo = { ...prevCompanyInfo, [key]: value };
      return updatedCompanyInfo;
    });
  };

  return (
    <Layout style={{ rowGap: "2rem" }}>
      <WhiteContainerEdit
        overlayChildren={
          <EditCompanyOne
            companyInfo={companyInfo}
            handleChange={handleChange}
          />
        }
      >
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
    </Layout>
  );
}

export default ProfileCompany;
