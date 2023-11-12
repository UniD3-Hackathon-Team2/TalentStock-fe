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

function OfferStudentOne({ row }) {
  const navigate = useNavigate();

  const { userId, SetUserId } = useContext(context);

  const [tnfkrState, SetTnfkrState] = useState(row.granted);

  const handleGrant = (offerId) => {
    const url = `http://43.202.86.217/api/v1/offer/${offerId}`; // offerId를 사용하여 URL 구성
    // console.log(userId)
    const headers = {
      Authorization: userId,
    };

    axios
      .patch(url, {}, { headers }) // 빈 데이터 객체를 전달하고, 세 번째 인자로 headers 객체를 전달
      .then((response) => {
        console.log(response.data);
        if (response.data.isSuccess) {
          // navigate(`/offer/${userId}`);
          SetTnfkrState(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCompany = (companyId) => {
    // const fetchData = async () => {
    //   try {
    //     console.log("fetching data");
    //     const url = `http://43.202.86.217/api/v1/member/${companyId}`; // companyId를 사용하여 url 구성
    //     const response = await axios.get(url);
    //     // console.log(response.data.result);
    //     if (response.data.isSuccess) {
    //       console.log(response.data.result);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    navigate(`/profile-company/${companyId}`);
  };

  return (
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
              borderRadius: "30px",
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
              {tnfkrState ? "수락 완료" : "수락대기중"}
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
            <Box sx={{ alignItems: "center", justifyContent: "center" }}>
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
                    borderRadius: 10,
                  }}
                  onClick={() => handleGrant(row.offerId)}
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
                    borderRadius: 10,
                  }}
                  onClick={() => handleCompany(row.companyId)}
                >
                  공고 상세보기
                </Button>
              </Box>
            </Box>
          </Box>
        </ListItem>
      </ul>
    </li>
  );
}

export default OfferStudentOne;
