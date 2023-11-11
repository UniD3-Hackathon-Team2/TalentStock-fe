import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { offers } from "./offers";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./OfferStudent.css"

function OfferStudent() {
  const [data, setData] = useState(offers);
  return (
    <div className="offer_list_container">
      <div className="offer_list_title">받은 오퍼</div>
      <div className="offer_list_table" style={{ width: '1000px' }}>
        <List
          sx={{
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {offers.map((row) => (
            <li key={`section-${row.name}`}>
              <ul>
                <ListSubheader>{`${row.name}`}</ListSubheader>
                <ListItem key={`item-${row.amount}-${row.position}`}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px',
                      border: '1px solid #E0E0E0',
                      borderRadius: '4px',
                      marginBottom: '8px',
                    }}
                  >
                    <ListItemText className="success" primary={`${row.success}`} />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Typography variant="h6" component="span" style={{ color: '#8A6AE3' }}>
                        {row.name}
                      </Typography>
                      <ListItemText primary={`에서 오퍼를 보냈습니다`} />
                      <ListItemText primary={`장학금 금액 ${row.amount}`} />
                      <ListItemText primary={`포지션 ${row.position}`} />
                    </Box>
                    <Box>
                      <Button variant="outlined" style={{ color: '#6A58D1', borderColor: '#6A58D1' }}>수락하기</Button>
                      <Button variant="contained" style={{ backgroundColor: '#6A58D1', color: 'white' }}>공고 상세보기</Button>
                    </Box>
                  </Box>
                </ListItem>
              </ul>
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}

export default OfferStudent;
