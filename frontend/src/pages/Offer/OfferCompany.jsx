import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import { offers_company } from "./offers_company";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./OfferCompany.css";
import Layout from "../../components/layout/Layout";

function OfferCompany() {
  const [data, setData] = useState(offers_company);
  return (
    <Layout>
      <div className="offer_list_container">
        <div className="offer_list_title">보낸 오퍼</div>
        <div className="offer_list_table" style={{ width: "1000px" }}>
          <List
            className="scroll"
            sx={{
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {offers_company.map((row) => (
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
                            에게 오퍼를 보냈습니다
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
                              관심 분야
                            </Typography>
                          }
                          secondary={row.interest}
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
                              학력
                            </Typography>
                          }
                          secondary={row.school}
                        />
                      </Box>
                      <Box sx={{ flexDirection: "column", width: "200px" }}>
                        <Button
                          className="buttons"
                          variant="contained"
                          style={{
                            width: "180px",
                            backgroundColor: "#6A58D1",
                            color: "white",
                            fontSize: 18,
                            fontWeight: 700,
                            margin: "5px",
                          }}
                        >
                          학생 상세보기
                        </Button>
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

export default OfferCompany;
