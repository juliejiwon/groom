import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import home from "./images/home.png";
import mypage from "./images/mypage.png";
import chat from "./images/chat.png";
import profile from "./images/profile.png";
import slide from "./images/slide.png";
import JobDetail from "./jobDetail";
import Main from "./Main";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:a_idx" element={<JobDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Todo
          title="수출상담회 운영스탭 모집"
          companyName="주식회사 가교"
          jobLocation="제주시"
          startTime="2022.10.17 시작"
          location="대면"
          duration="3시간"
          price="30,000원"
        /> */
}
