import React from "react";
import logo from "../me.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const About = () => {
  const mukesh = "Mukesh";
  return (
    <div className="about">
      <img src={logo} alt="" />
      <div className="about_right">
        <span className="about_details">
          about(<span className="about_details_name">{mukesh}</span>
          <span className="about_details">)</span>
        </span>

        <div className="about_icons">
          <ul className="about_icons_ul">
            <li>
              <HiOutlineMail
                onClick={
                  () => navigator.clipboard.writeText("mukeshabhi08@gmail.com")
                  ///create a popup desogn and use usestates to controll that
                }
              />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FiFigma />
            </li>
          </ul>
          <button className="resume">Resume</button>
        </div>
        <span className="about_description">
          // <label>I</label> completed my MCA(8CGPA) at Bangalore Institute of Technology. A
          self taught fullstack blockchain developer. I am hard-working,
          autonomous and passionate about development. I love learning new
          things everyday and creating new projects. Hope to work with you soon!
          //
        </span>
      </div>
    </div>
  );
};

export default About;
