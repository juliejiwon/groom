import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import back from "./images/back.png";
import jobpic from "./images/jobpic.png";
import chatbtn from "./images/chatbtn.png";
import { useState, useEffect } from "react";

function JobDetail({ match }) {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "/view/detail/?a_idx=${match.params.a_idx}"
    ).then((response) => response.json());

    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(data);

  return (
    <div className="wrapper">
      <div className="topNav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="icon" src={back} />
        </Link>
      </div>
      <img className="jobImage" src={jobpic} />
      <div className="jobTitle">
        <h2> 제주리베, 여성 쇼호스트 모집 </h2>
      </div>
      <div className="jobDetails">
        <div className="jobDetail">
          <div className="detailTitle">카테고리</div>
          <div className="detailContent">마케팅</div>
        </div>
        <div className="jobDetail">
          <div className="detailTitle">업체명</div>
          <div className="detailContent">제주리베</div>
        </div>
        <div className="jobDetail">
          <div className="detailTitle">주소</div>
          <div className="detailContent">제주도 서귀포시</div>
        </div>
        <div className="jobDetail">
          <div className="detailTitle">업무 시작</div>
          <div className="detailContent">2022.10.21</div>
        </div>
      </div>
      <div className="detailRequest">
        <div className="detailTitle">요청 내용</div>
        <div className="detailText">
          제주에 거주하시거나 한동안 제주에 거주하실 분들 중에 여성 쇼호스트를
          모집하고 있습니다. 하실 일은 제주리베 화장품 마유크림과 마유립밤을
          방송하는 일입니다. 경험이 없는 분들도 쇼호스트에 도전해 보실 분들은
          간단한 자기소개 문자로 응모해 주시기 바랍니다.
        </div>
      </div>
      <img src={chatbtn} className="chatbtn" />
    </div>
  );
}

export default JobDetail;
