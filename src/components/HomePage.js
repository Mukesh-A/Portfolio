import React from "react";
import logo from "../img1.png";

const HomePage = () => {
  return (
    <div className="home" id="hero">
      {/* <span>`</span> */}
      <div className="home-content">
        <span className="main_text">Hi,I'm</span>
        <span className="main_text_name"> Mukesh()</span>
        {/* <span>`</span> */}
        <h3 className="fullstack">FullStack Developer</h3>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default HomePage;
