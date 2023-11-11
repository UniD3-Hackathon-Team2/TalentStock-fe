import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
// import { offers } from "./offers";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";


import "./OfferStudent.css";
import Layout from "../../components/layout/Layout";
import { context } from "../../App";

const BASEURL = "http://43.202.86.217/api/v1/offer?";


function OfferStudent() {
  const {userType, setUserType} = useContext(context);
  const {userId, SetUserId} = useContext(context);
  const [offerType, SetOfferType] = useState("JOB");
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data")
        const response = await axios.get(BASEURL, {
          headers: {
            authorization: "3" // 여기에 헤더 값 설정
          },
          params: {
            offerType: "JOB" // 여기에 URL 쿼리 매개변수 설정
          }
        });
        // console.log(offerType)
        // console.log(response.data.isSuccess);
        if (response.data.isSuccess) {
          // console.log("yes")
          console.log(response.data.result.companyOfferDtoList)
          // t = response.data.result.companyOfferDtoList
          // console.log(t)
          setOffers(response.data.result.companyOfferDtoList)
          // console.log(t);
          // setOffers(t => {
          //   console.log(t)
          //   return t
          // })
          // console.log(offers);
        }
        // 응답 데이터 처리
      } catch (error) {
        // 에러 처리
        console.log(error)
      }
    };

    fetchData();
  }, []);


  const handleCompany = (data) => {
    // console.log(userId)
    // console.log(data.userId)
    // console.log(data.id);
    // SetUserType("company")
    // Navigate(`/profile/${data.id}`)
  }
  return (
    <Layout>
      <div className="offer_list_container">
        <div className="offer_list_title">받은 오퍼</div>
        <div className="offer_list_table" style={{ width: "1000px" }}>
          <List
            className="list"
            sx={{
              position: "relative",
              overflow: "auto",
              maxHeight: 480,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {offers.map((row) => (
              <li key={`section-${row.name}`}>
                <ul>
                  <ListSubheader
                    sx={{
                      display: "none",
                    }}
                  >
                    {row.name}
                  </ListSubheader>
                  <ListItem key={`item-${row.amount}-${row.position}`}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        bgcolor: "white",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        border: "1px solid #E0E0E0",
                        borderRadius: "15px",
                        marginBottom: "8px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        style={{
                          color: "#8A6AE3",
                          fontSize: 25,
                          fontWeight: 1000,
                          marginLeft: 70,
                        }}
                      >
                        {row.granted ? '수락 완료' : '수락대기중'}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          // alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <ListItemText className="list_top">
                          <Typography
                            variant="body1"
                            component="span"
                            style={{
                              color: "#6A58D1",
                              fontSize: 30,
                              fontWeight: 800,
                              display: "inline-block",
                            }}
                          >
                            {row.companyName}
                          </Typography>
                          <Typography
                            style={{
                              fontSize: 25,
                              fontWeight: 800,
                              display: "inline-block",
                            }}
                          >
                            에서 오퍼를 받았습니다
                          </Typography>
                        </ListItemText>

                        <ListItemText
                          primary={
                            <Typography
                              variant="body1"
                              component="span"
                              style={{
                                color: "#6A58D1",
                                fontSize: 18,
                                fontWeight: 800,
                              }}
                            >
                              장학금 금액
                            </Typography>
                          }
                          secondary={row.scholarship}
                        />
                        <ListItemText
                          primary={
                            <Typography
                              variant="body1"
                              component="span"
                              style={{
                                color: "#6A58D1",
                                fontSize: 18,
                                fontWeight: 800,
                              }}
                            >
                              포지션
                            </Typography>
                          }
                          secondary={row.position}
                        />
                      </Box>
                      <Box
                        sx={{ alignItems: "center", justifyContent: "center" }}
                      >
                        <Box sx={{ flexDirection: "column" }}>
                          <Button
                            className="buttons"
                            variant="outlined"
                            style={{
                              color: "#6A58D1",
                              borderColor: "#6A58D1",
                              fontSize: "18px",
                              fontWeight: 600,
                              margin: "5px",
                              width: "200px",
                            }}
                          >
                            수락하기
                          </Button>
                        </Box>
                        <Box sx={{ flexDirection: "column" }}>
                          <Button
                            className="buttons"
                            variant="contained"
                            style={{
                              backgroundColor: "#6A58D1",
                              color: "white",
                              fontSize: "18px",
                              fontWeight: 600,
                              margin: "5px",
                              width: "200px",
                            }}
                            onClick={handleCompany}
                          >
                            공고 상세보기
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </ListItem>
                </ul>
              </li>
            ))}
          </List>
        </div>
      </div>
    </Layout>
  );
}

export default OfferStudent;
