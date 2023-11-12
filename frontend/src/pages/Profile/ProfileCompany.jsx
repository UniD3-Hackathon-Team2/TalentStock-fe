import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

  const params = useParams();
  console.log(params);

  const handleChange = ({ key, value }) => {
    console.log(key, value);
    SetDatas((prevCompanyInfo) => {
      const updatedCompanyInfo = { ...prevCompanyInfo, [key]: value };
      return updatedCompanyInfo;
    });
  };

  const [submitInfo, setSubmitInfo] = useState({});

  const parame = useParams();
  const id = parame.id;

  const BASEURL = "http://43.202.86.217/api/v1";

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

  return (
    <Layout style={{ rowGap: "2rem" }}>
      <WhiteContainerEdit
        overlayChildren={
          <EditCompanyOne
            companyInfo={datas}
            handleChange={handleChange}
            setSubmitInfo={setSubmitInfo}
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
                alt={`로고 이미지 - ${datas.name}`}
              />
            </div>
          </GridElementWrapper>

          <GridElementWrapperRight item xs={right}>
            <GridWrapper container>
              <GridElementWrapper item xs={3}>
                <h3 style={{ lineHeight: "0" }}>{datas.name}</h3>
              </GridElementWrapper>
              <GridElementWrapper item xs={3}>
                <div style={{ lineHeight: "0" }}>{datas.email}</div>
              </GridElementWrapper>

              <GridElementWrapper item xs={12}>
                {datas.explanation ? datas.explanation : "저희 회사는"}
              </GridElementWrapper>
            </GridWrapper>
          </GridElementWrapperRight>
        </GridWrapper>

        {datas.tagList && datas.tagList.length !== 0 && (
          <GridWrapper container>
            <GridElementWrapper item xs={full}>
              <h3>관심분야</h3>
            </GridElementWrapper>

            <GridElementWrapper item xs={full}>
              <GridWrapper container>
                {datas.tagList.map((field, index) => (
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
        )}
      </WhiteContainerEdit>
      <WhiteContainerEdit
        overlayChildren={
          <EditCompanyTwo companyInfo={datas} handleChange={handleChange} />
        }
        setSubmitInfo={setSubmitInfo}
      >
        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>
              공고: <b>{datas.position}</b>
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
                <b style={{ height: "1.2rem" }}>직무 설명</b>
                <b style={{ height: "1.2rem" }}>졸업 후 필수 근무 기간</b>
                <b style={{ height: "1.2rem" }}>방학 기간 내 의무 근로 여부</b>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                <div style={{ height: "1.2rem" }}>
                  {datas.positionExplanation}{" "}
                </div>
                <div style={{ height: "1.2rem" }}>
                  {datas.mustWorkingYear}년
                </div>
                <div style={{ height: "1.2rem" }}>
                  {datas.isCompulsoryWork ? "예" : "아니요"}
                </div>
              </div>
            </div>
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainerEdit>
    </Layout>
  );
}

export default ProfileCompany;
