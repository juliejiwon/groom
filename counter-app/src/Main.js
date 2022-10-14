import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import home from "./images/home.png";
import mypage from "./images/mypage.png";
import chat from "./images/chat.png";
import profile from "./images/profile.png";
import slide from "./images/slide.png";
import jobDetail from "./jobDetail";

function Main() {
  const [jobs, setJobs] = useState([]);
  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("/view").then((response) => response.json());

    setJobs(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="header1">
          <div className="headerTitle"> 올랑 </div>
          <img className="profileImage" src={profile} />
        </div>
        <div className="header2">
          <img className="slide" src={slide} />
        </div>
        <div>
          <p></p>
        </div>
      </div>

      <div>
        <div className="empty"></div>
        {jobs &&
          jobs.map((job) => (
            <Link
              to={"/detail/${job.a_idx}"}
              style={{ textDecoration: "none" }}
            >
              <Todo
                title={job.title}
                companyName={job.company}
                jobLocation={job.location}
                startTime={job.start_time}
                location={job.onoff}
                duration={job.total_time}
                price={job.pay}
              />
            </Link>
          ))}
      </div>
      <div className="bottomNav">
        <img className="bottomMenu" src={home} />
        <img className="bottomMenu" src={mypage} />
        <img className="bottomMenu" src={chat} />
      </div>
    </div>
  );
}

export default Main;
