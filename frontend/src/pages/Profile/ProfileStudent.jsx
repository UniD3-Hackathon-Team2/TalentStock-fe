import Layout from "../../components/layout/Layout";
import * as React from "react";
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

export default function ProfileStudent() {
  const [studentInfo, setStudentInfo] = React.useState({
    name: "김OO",
    email: "email@email.com",
    university: "OO대학교",
    department: "컴퓨터공학과",
    grade: 3,
    majorScore: 3.7,
    totalScore: 3.9,
    gpaTotal: 4.5,
    introduce: "저는 누구누구입니다",
    interestedFields: [
      "관심1",
      "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁ",
      "ㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁㅁㅁ",
      "ㅁㅁㅁㅁ",
    ],
    schooling: [
      {
        periodStart: "2018",
        periodEnd: null,
        school: "OO대학교",
        isUniversity: true,
        additionalInfo: "저는 이 학교에서 정말 열심히\n2학년때는 동아리 활동을",
      },
      {
        periodStart: "2015",
        periodEnd: "2017",
        school: "OO고등학교",
        additionalInfo: "저는 이 학교에서 정말 열심히\n2학년때는 동아리 활동을",
      },
    ],
    competitionsWon: [
      {
        competitionName: "이러이러 시합",
        prizeWon: "금상",
        dateWon: "2018년 10월",
        additionalInfo: "추가 정보",
      },
      {
        competitionName: "이러이러 시합2",
        prizeWon: "은상",
        dateWon: "2018년 10월",
        additionalInfo: "추가 정보",
      },
    ],
    participatedActivities: [
      {
        name: "이러이러 활동",
        date: "2018년 10월",
        additionalInfo: "추가 정보",
      },
      {
        name: "이러이러 활동2",
        date: "2018년 10월",
        additionalInfo: "추가 정보",
      },
    ],
    languages: [
      {
        name: "영어",
        level: "중급",
        exams: [
          {
            name: "TOEFL",
            score: "115/120",
          },
          {
            name: "TOEIC",
            score: "800/900",
          },
        ],
      },
      {
        name: "중국어",
        level: "초급",
        exams: [
          {
            name: "HSK",
            score: "6급",
          },
        ],
      },
      {
        name: "일본어",
        level: "초급",
        exams: [
          {
            name: "JLPT",
            score: "1급",
          },
        ],
      },
    ],
    qualifications: [
      {
        name: "컴활 1급",
        date: "2023 8월",
      },
      {
        name: "다른 자격증",
        date: "2021 6월",
      },
    ],
    personalEssay: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis aliquam porta. Nullam vestibulum elit et suscipit vehicula. Sed fringilla turpis a lorem dignissim fermentum. Curabitur pretium purus nec libero pharetra, non ultrices ex aliquam. Curabitur a nunc ullamcorper, aliquam ligula eu, euismod libero. Quisque finibus venenatis nulla efficitur pellentesque. Nulla ullamcorper lacus porttitor, faucibus dolor a, venenatis tortor. Morbi nec iaculis neque. Etiam tempus est sed dignissim semper. Quisque euismod magna sed est laoreet lobortis. Integer fermentum turpis odio, nec consequat lectus facilisis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed interdum eget magna ac mattis. Aenean id elit at diam iaculis pulvinar sed non ligula.
    Etiam ac rhoncus odio, in porttitor lacus. Ut maximus eu lacus at gravida. Quisque quis ullamcorper erat, quis aliquam magna. Fusce mollis mi lectus, eget bibendum nibh ultricies nec. Sed cursus fringilla magna lacinia venenatis. Sed a eros neque. Proin ultricies tempus imperdiet. Donec lectus dolor, sagittis quis sodales et, condimentum quis purus.
    Integer consectetur velit gravida orci eleifend euismod. Sed fermentum lacus nec tellus gravida, sed viverra purus sagittis. Vivamus in odio orci. Nunc aliquam lacinia erat, a convallis quam ultrices quis. Integer urna purus, maximus non leo nec, laoreet mattis nisi. Aenean diam ante, eleifend at felis in, condimentum rhoncus lectus. Sed purus velit, aliquam nec venenatis non, bibendum vitae leo. In ac neque non augue posuere dapibus. Vestibulum ullamcorper varius ligula. Maecenas ac elementum velit. Phasellus faucibus, massa at pulvinar posuere, massa mi condimentum orci, ut accumsan nunc ipsum ac eros. Donec arcu risus, vehicula eget ullamcorper non, condimentum nec ante. Vestibulum lacinia, urna id posuere egestas, dui justo consectetur elit, at pharetra dolor urna eget lorem. Mauris et auctor neque, ac malesuada lacus. Vestibulum eu justo malesuada, ultrices urna eget, malesuada nunc. Duis sed ultricies est, quis pretium turpis.
    Vivamus mollis quam eget porta sagittis. Pellentesque ac enim ac lacus ultricies molestie. Fusce iaculis elit ut nulla feugiat, id pretium est ultrices. Aliquam ac justo in lorem cursus cursus ut ac libero. Sed volutpat leo luctus elit pulvinar condimentum. Phasellus eget turpis luctus, consectetur erat id, pharetra lectus. Etiam non commodo est.
    `,
  });

  return (
    <Layout style={{ rowGap: "2rem" }}>
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
                {studentInfo.introduce}
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
              {studentInfo.interestedFields.map((field, index) => (
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

        <GridWrapper container>
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
                                {studentInfo.totalScore} /{" "}
                                {studentInfo.gpaTotal}
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
        </GridWrapper>
      </WhiteContainer>

      <WhiteContainer>
        <GridWrapper container>
          <GridElementWrapper item xs={full}>
            <h3>수상 경력</h3>
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <GridWrapper container>
              {studentInfo.competitionsWon.map(
                (
                  { competitionName, prizeWon, dateWon, additionalInfo },
                  index
                ) => (
                  <React.Fragment key={index}>
                    <GridElementWrapper xs={full}>
                      <Accordion
                        title={
                          <div style={{ display: "flex", width: "100%" }}>
                            <b>
                              {competitionName} · {prizeWon}
                            </b>
                            <div
                              style={{
                                marginLeft: "auto",
                                marginRight: "2rem",
                              }}
                            >
                              {dateWon}
                            </div>
                          </div>
                        }
                        content={additionalInfo}
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
              {studentInfo.participatedActivities.map(
                ({ name, date, additionalInfo }, index) => (
                  <React.Fragment key={index}>
                    <GridElementWrapper xs={full}>
                      <Accordion
                        title={
                          <div style={{ display: "flex", width: "100%" }}>
                            <b>{name}</b>
                            <div
                              style={{
                                marginLeft: "auto",
                                marginRight: "2rem",
                              }}
                            >
                              {date}
                            </div>
                          </div>
                        }
                        content={additionalInfo}
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
          {studentInfo.languages.map(({ name, level, exams }, index) => (
            <React.Fragment key={index}>
              <GridElementWrapper
                item
                xs={left}
                style={{ borderRight: "3px solid var(--purple4)" }}
              >
                <b>
                  {name} ({level})
                </b>
              </GridElementWrapper>
              <GridElementWrapperRight item xs={right}>
                <div
                  style={{
                    backgroundColor: "var(--purple1)",
                    padding: "0.5rem 1rem",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.5rem",
                  }}
                >
                  {exams.map(({ name, score }, index) => (
                    <div key={index} style={{ display: "flex" }}>
                      <div>{name}</div>
                      <div style={{ marginLeft: "auto" }}>{score}</div>
                    </div>
                  ))}
                </div>
              </GridElementWrapperRight>
            </React.Fragment>
          ))}
        </GridWrapper>
        <GridWrapper>
          <GridElementWrapper item xs={full}>
            <h3>자격증</h3>
          </GridElementWrapper>

          <GridElementWrapper item xs={full}>
            <GridWrapper container>
              {studentInfo.qualifications.map(({ name, date }, index) => (
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
                      <b>{name}</b>
                      <b style={{ marginLeft: "auto" }}>{date}</b>
                    </div>
                  </GridElementWrapper>
                </React.Fragment>
              ))}
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
            {studentInfo.personalEssay.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </GridElementWrapper>
        </GridWrapper>
      </WhiteContainer>
    </Layout>
  );
}

// style={{ borderRight: "2px solid var(--purple4)" }}
