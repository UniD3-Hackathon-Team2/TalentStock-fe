import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import { offers } from "./offers";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import "./OfferStudent.css";
import Layout from "../../components/layout/Layout";

function OfferStudent() {
  const [data, setData] = useState(offers);
  const {userType, SetUserType} = useContext(context);

  const handleCompany = (data) => {
    print(data.id);
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
                        {row.success}
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
                            {row.name}
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
                          secondary={row.amount}
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
