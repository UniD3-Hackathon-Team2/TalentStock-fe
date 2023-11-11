import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { offers } from "./offers";

import "./ProfileCompany.css";
import Layout from "../../components/layout/Layout";

function ProfileCompany() {
  const [data, setData] = useState(offers);
  return (
    <Layout>
        <div style={{backgroundColor: "#ffffff", width:"80%", margin:"auto", borderRadius:"20px", padding:"20px"}}>
            {offers.map((row, index) => (
                <ul>
                    <div style={{margin:"auto", width: "80%", backgroundColor: "#ffffff", textAlign: "center"}}>
                        <img src="로고.jpg" style={{ margin:"auto" , width:"90%", border:"5px solid"}} alt={`로고 이미지 - ${row.name}`} />
                    </div>
                    <div class="index">기업명</div>
                    <div class="contents"style={{height:"100px", textAlign:"center"}}>{row.name}</div>
                    <div class="index">관심분야</div>
                    <div class="contents"style={{height:"200px", textAlign:"center"}}>{row.info}</div>
                    <div>
                        <div class="container">
                            <div class="index-1">방학 기간 내 의무 근로 여부</div>
                            <div class="contents"><span>{row.vaca}</span></div>
                        </div>
                        <div class="container">
                            <div class="index-1">졸업 후 의무 근로 년수</div>
                            <div class="contents"><span>{row.work_year}</span></div>
                        </div>
                        <div class="container">
                            <div class="index-1">필요 직무</div>
                            <div class="contents" style={{textAlign:"center"}}>{row.needs}</div>
                        </div>
                    </div>
                </ul>
            ))}
        </div>
    </Layout>
  );

}

export default ProfileCompany;
