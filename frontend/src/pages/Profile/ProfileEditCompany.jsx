import { useState } from "react";
import { Accordion2 } from "../../components/Accordion";
import {
  GridElementWrapper,
  GridElementWrapperRight,
  GridWrapper,
  WhiteContainer,
  WhiteContainerOverlay,
  full,
  left,
  right,
} from "../../components/Profile/Layout";
import Layout from "../../components/layout/Layout";
import TextField from "@mui/material/TextField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Checkbox from "@mui/material/Checkbox";

export default function ProfileEditCompany() {
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
    openJob: {
      jobTitle: "프런트앤드 개발자",
      jobDescription: "프런트앤드 개발자, 이걸 합니다",
      vaca: true,
      workYears: 100000,
    },
  });
  return (
    <Layout style={{ rowGap: "2rem" }}>
      <WhiteContainerOverlay>
        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>기본 정보</h3>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <b>사진</b>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
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
                cursor: "pointer",
              }}
            >
              <img
                src="/logo.jpg"
                style={{ width: "90%" }}
                alt={`로고 이미지 - ${companyInfo.name}`}
              />
            </div>
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>기업명</h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <TextField
              id="outlined"
              variant="outlined"
              value={companyInfo.name}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>기업소개</h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <TextField
              id="outlined"
              variant="outlined"
              value={companyInfo.introduce}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>
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
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "1rem",
                  }}
                >
                  <div># {field} </div>
                  <CloseRoundedIcon
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {}}
                  />
                </GridElementWrapper>
              ))}
              <GridElementWrapper
                style={{
                  margin: "0rem 1rem 1rem 0rem",
                  padding: "0.8rem 1rem",
                  backgroundColor: "var(--purple2)",
                  color: "var(--white)",
                  borderRadius: "2rem",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "1rem",
                }}
              >
                <AddRoundedIcon
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                />
              </GridElementWrapper>
            </GridWrapper>
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainerOverlay>
      <WhiteContainerOverlay>
        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>공고</h3>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>공고명</h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <TextField
              id="outlined"
              variant="outlined"
              value={companyInfo.openJob.jobTitle}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>직무 설명</h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <TextField
              id="outlined"
              variant="outlined"
              value={companyInfo.openJob.jobDescription}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>졸업 후 필수 근무 기간</h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <TextField
              id="outlined"
              variant="outlined"
              value={companyInfo.openJob.workYears}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>
          <GridElementWrapper item xs={full}>
            <h4 style={{ marginBottom: "-0.1rem" }}>
              방학 기간 내 의무 근로 여부
            </h4>
          </GridElementWrapper>
          <GridElementWrapper item xs={0}>
            <Checkbox
              id="outlined"
              variant="outlined"
              checked={companyInfo.openJob.vaca}
              onChange={() => setCompanyInfo}
            />
          </GridElementWrapper>
          <GridElementWrapper item xs>
            의무 근무 필수
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainerOverlay>
    </Layout>
  );
}
