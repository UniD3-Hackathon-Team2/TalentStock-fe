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

import OfferStudentOne from "./OfferStudentOne";

// const BASEURL = "http://43.202.86.217/api/v1/offer?";



function OfferStudent() {
  const { userType, setUserType } = useContext(context);
  const { userId, SetUserId } = useContext(context);
  const [offerType, SetOfferType] = useState("JOB");
  const [offers, setOffers] = useState([]);
  // const [memberId, setMemberId] = useState(21);
  const BASEURL = "http://43.202.86.217/api/v1/offer?offerType=JOB";
  // const BASEURL2 = `http://43.202.86.217/api/v1/member/${memberId}`;
  console.log(userId)
  const navigate = useNavigate();

  
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching data");
        const response = await axios.get(BASEURL, {
          headers: {
            authorization: userId, // 여기에 헤더 값 설정
          },
          
        });

        if (response.data.isSuccess) {
          console.log(response.data.result.companyOfferDtoList);

          setOffers(response.data.result.companyOfferDtoList);
        }
        // 응답 데이터 처리
      } catch (error) {
        // 에러 처리
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
              <OfferStudentOne row={row}/>
            ))}
          </List>
        </div>
      </div>
    </Layout>
  );
}

export default OfferStudent;
