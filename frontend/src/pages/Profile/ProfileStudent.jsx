import Layout from "../../components/layout/Layout";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Accordion } from "../../components/Accordion";
import {
  GridElementWrapper,
  GridElementWrapperRight,
  GridWrapper,
  WhiteContainer,
  full,
  left,
  right,
} from "../../components/Profile/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASEURL = "http://43.202.86.217/api/v1";

export default function ProfileStudent() {
  const parame = useParams();
  const id = parame.id;

  const [studentInfo, setStudentInfo] = React.useState(null);

  const GetUseInfo = async () => {
    try {
      const res = await axios({
        url: `/member/${id}`,
        method: "get",
        baseURL: BASEURL,
      });

      if (true) setStudentInfo(res.data.result);
    } catch (error) {
      console.log("can't use user info system", error);
    }
  };

  useEffect(() => {
    GetUseInfo();
  }, []);

  useEffect(() => {
    console.log(studentInfo);
  }, [studentInfo]);

  return (
    <Layout style={{ rowGap: "2rem" }}>
      {studentInfo !== null && (
        <>
          <WhiteContainer>
            <GridWrapper container>
              <GridElementWrapper
                item
                xs={left}
                sx={{ height: "10rem", alignItems: "center" }}
              >
                <AccountCircleIcon
                  sx={{ fontSize: "150px", color: "var(--purple4)" }}
                />
              </GridElementWrapper>

              <GridElementWrapperRight item xs={right}>
                <GridWrapper container>
                  <GridElementWrapper xs={2}>
                    <h3>{studentInfo.name}</h3>
                  </GridElementWrapper>
                  <GridElementWrapper xs={10}>
                    {studentInfo.email}
                  </GridElementWrapper>
                  <GridElementWrapper xs={12}>
                    {studentInfo.university} {studentInfo.department}
                  </GridElementWrapper>
                  <GridElementWrapper xs={12}>
                    {studentInfo.shortIntroduce}
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
                  {studentInfo.interestTagList.map((field, index) => (
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

            {/* <GridWrapper container>
              <GridElementWrapper item xs={full}>
                <h3>학력</h3>
              </GridElementWrapper>

              <GridElementWrapper item xs={full}>
                <GridWrapper container>
                  {studentInfo.schooling.map(
                    (
                      {
                        periodStart,
                        periodEnd,
                        school,
                        isUniversity,
                        additionalInfo,
                      },
                      index
                    ) => (
                      <React.Fragment key={index}>
                        <GridElementWrapper
                          xs={left}
                          style={{ justifyContent: "start" }}
                        >
                          <b>
                            {periodStart} ~ {periodEnd ? periodEnd : "현재"}
                          </b>
                        </GridElementWrapper>

                        <GridElementWrapperRight xs={right}>
                          <Accordion
                            title={
                              <div style={{ display: "flex", width: "100%" }}>
                                <b>{school}</b>
                                {isUniversity && (
                                  <div
                                    style={{
                                      marginLeft: "auto",
                                      marginRight: "2rem",
                                    }}
                                  >
                                    {studentInfo.totalScore} / 4.5
                                  </div>
                                )}
                              </div>
                            }
                            content={additionalInfo}
                            color="primary"
                          />
                        </GridElementWrapperRight>
                      </React.Fragment>
                    )
                  )}
                </GridWrapper>
              </GridElementWrapper>
            </GridWrapper> */}
          </WhiteContainer>

          <WhiteContainer>
            <GridWrapper container>
              <GridElementWrapper item xs={full}>
                <h3>수상 경력</h3>
              </GridElementWrapper>

              <GridElementWrapper item xs={full}>
                <GridWrapper container>
                  {studentInfo.awardList.map(
                    ({ title, content, awardDate }, index) => (
                      <React.Fragment key={index}>
                        <GridElementWrapper xs={full}>
                          <Accordion
                            title={
                              <div style={{ display: "flex", width: "100%" }}>
                                <b>
                                  {index === 0 ? "uni-Dthon" : "SafetyHack"} ·{" "}
                                  {title}
                                </b>
                                <div
                                  style={{
                                    marginLeft: "auto",
                                    marginRight: "2rem",
                                  }}
                                >
                                  {awardDate}
                                </div>
                              </div>
                            }
                            content={content}
                          />
                        </GridElementWrapper>
                      </React.Fragment>
                    )
                  )}
                </GridWrapper>
              </GridElementWrapper>
            </GridWrapper>

            <GridWrapper container>
              <GridElementWrapper item xs={full}>
                <h3>대외활동</h3>
              </GridElementWrapper>

              <GridElementWrapper item xs={full}>
                <GridWrapper container>
                  {studentInfo.groupActivityList.map(
                    (
                      { groupName, role, startDate, endDate, content },
                      index
                    ) => (
                      <React.Fragment key={index}>
                        <GridElementWrapper xs={full}>
                          <Accordion
                            title={
                              <div style={{ display: "flex", width: "100%" }}>
                                <b>
                                  {groupName} · {role}
                                </b>
                                <div
                                  style={{
                                    marginLeft: "auto",
                                    marginRight: "2rem",
                                  }}
                                >
                                  {startDate} ~ {endDate}
                                </div>
                              </div>
                            }
                            content={content}
                          />
                        </GridElementWrapper>
                      </React.Fragment>
                    )
                  )}
                </GridWrapper>
              </GridElementWrapper>
            </GridWrapper>
          </WhiteContainer>

          <WhiteContainer>
            <GridWrapper container>
              <GridElementWrapper item xs={full}>
                <h3>어학 능력</h3>
              </GridElementWrapper>
              {studentInfo.foreignScoreList.map(
                ({ type, score, acquisitionDate }, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "var(--purple1)",
                      padding: "0.5rem 1rem",
                      fontWeight: "bold",
                      display: "flex",
                      width: "100%",
                      margin: "0.5rem",
                    }}
                  >
                    <div>{type}</div>
                    <div style={{ marginLeft: "auto", color: "white" }}>
                      {acquisitionDate}
                    </div>
                    <div style={{ marginLeft: "3rem", color: "white" }}>
                      {score}
                    </div>
                  </div>
                )
              )}
            </GridWrapper>
            <GridWrapper>
              <GridElementWrapper item xs={full}>
                <h3>자격증</h3>
              </GridElementWrapper>

              <GridElementWrapper item xs={full}>
                <GridWrapper container>
                  {studentInfo.certificateList.map(
                    ({ title, content, awardDate }, index) => (
                      <React.Fragment key={index}>
                        <GridElementWrapper xs={full}>
                          <div
                            style={{
                              backgroundColor: "var(--purple1)",
                              borderRadius: "2rem",
                              padding: "0.8rem 2rem",
                              color: "var(--purple4)",
                              display: "flex",
                            }}
                          >
                            <b style={{ width: "10rem" }}>{title}</b>
                            <div>: &nbsp;&nbsp;&nbsp;{content}</div>
                            <b style={{ marginLeft: "auto" }}>{awardDate}</b>
                          </div>
                        </GridElementWrapper>
                      </React.Fragment>
                    )
                  )}
                </GridWrapper>
              </GridElementWrapper>
            </GridWrapper>
          </WhiteContainer>

          <WhiteContainer>
            <GridWrapper>
              <GridElementWrapper item xs={full}>
                <h3>자기소개서</h3>
              </GridElementWrapper>
              <GridElementWrapper
                item
                xs={full}
                style={{ color: "var(--purple4)" }}
              >
                {studentInfo.introduce}
              </GridElementWrapper>
            </GridWrapper>
          </WhiteContainer>
        </>
      )}
    </Layout>
  );
}
