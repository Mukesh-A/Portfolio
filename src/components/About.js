import React from "react";
import logo from "../me.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import styled from "styled-components";

const arr = [
  "HTML",
  "CSS",
  "Js",
  "React Js",
  "MongoDb",
  "Node js",
  "Tailwindcss",
  "Express.Js",
  "Solidity",
  "Hardhat",
  "Remix IDE",
  "Next Js"
];
const About = () => {
  const mukesh = "Mukesh";
  return (
    <Container className="about" id="about">
      {/* <div className="about_left"> */}
      <img src={logo} alt="" />
      {/* </div> */}
      <div className="about_right">
        <span className="about_details">
          about(<span className="about_details_name">{mukesh}</span>
          <span className="about_details">)</span>
          {/* README.md */}
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
          // <label>I</label> completed my MCA(8CGPA) at Bangalore Institute of
          Technology. A self taught fullstack developer. I am
          hard-working, autonomous and passionate about development. I love
          learning new things everyday and creating new projects. Hope to work
          with you soon! //
          <br />
        </span>
        <p>skills</p>
        <div className="sub-div">
          {arr.map((item) => {
            return <span className="sub">{item}</span>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* justify-content:center; */
  /* align-items:center; */
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }

  img {
    height: 100%;
    /* border: 1px solid red; */
    -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
    @media (max-width: 480px) {
      margin-left: auto;
      height: 80%;
      /* border: 1px solid red; */

      /* text-align: right; */
    }
  }

  .about_right {
    /* height: 50%; */
    width: 50%;
    /* display: grid;
    grid-template-rows: 10% 7% 83%; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 5rem;
    /* padding-bottom: 5rem; */
    /* align-items: end; */
    gap: 0.5rem;
    /* border: 1px solid red; */

    @media (max-width: 480px) {
      /* height: 100%; */
      /* border: 1px solid red; */

      padding: 0.5rem;
      /* grid-template-rows: 10% 7% 83%; */
      /* gap: 0.5rem; */
      font-size: 1rem;
      /* height: auto; */
      width: 98%;
    }
    .about_details {
      color: #dbdbdb;
      /* height: 100vh; */
      font-size: 3rem;
      font-weight: 700;

      letter-spacing: 0.05em;
      @media (max-width: 480px) {
        height: 6rem;
        font-size: 2.5rem;
        /* border: 1px solid blue; */
      }
      .about_details_name {
        color: #682ae9;
        height: 100vh;
        font-size: 3rem;
        font-weight: 700;
        /* word-spacing: 0.1em; */
        letter-spacing: 0.05em;
        @media (max-width: 480px) {
          font-size: 2.6rem;
          /* height: 4.6rem; */

          padding: 0;
        }
      }
    }
    .about_icons {
      display: flex;
      align-items: center;
      height: 2rem;
      /* border: 1px solid blue; */

      /* gap: 2rem; */
      .about_icons_ul li {
        display: inline-block;
        text-align: center;
        padding: 1rem;
        /* margin-top:20px; */
        font-size: 1.5rem;
        color: #682ae9;
        cursor: pointer;
        @media (max-width: 480px) {
          padding: 0.3rem;
          font-size: 1.3rem;
        }
      }
      .resume {
        background-color: #682ae9;
        border-radius: 25px;
        outline: none;
        border: none;
        color: #0e1212;
        font-size: 1rem;
        padding: 5px 10px;
        margin-left: 10px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        .resume:hover {
          box-shadow: 0 3px 16px rgba(145, 92, 182, 0.4);
        }
        @media (max-width: 480px) {
          font-size: 0.9rem;
          /* padding: 0; */
        }
      }
      @media (max-width: 480px) {
        /* border: 1px solid blue; */
        height: 3.7rem;
      }
    }
    .about_description {
      /* width: 100%; */
      color: #777;
      font-size: large;
      font-style: italic;

      label {
        font-size: large;
        font-weight: 700;
        font-style: italic;
      }
      @media (max-width: 480px) {
        font-size: medium;
        padding: 0;
        /* border: 1px solid blue; */
        height: 13rem;
        /* height: auto; */
        /* border: 1px solid blue; */
      }
    }
    p {
      color: #dbdbdb;
      /* height: 100vh; */
      font-size: 1.6rem;
      font-weight: 700;
      padding: 0.3rem;

      /* opacity:.5/; */
      /* letter-spacing: 0.05em; */
    }
    .sub-div {
      /* width: 100%; */
      /* height: 16rem; */
      margin-top: 1rem;
      width: 70%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.6rem;
      align-items: center;
      justify-content: center;
      color: #777;
      font-size: 1.1rem;
      /*  */
      @media (max-width: 480px) {
        /* border: 1px solid red; */
        /* height:1rem; */
        font-size: 1rem;
        width: 100%;
        /* height: 8rem; */
        padding: 0.2rem;
        align-items: center;
        justify-content: center;
        margin-top: 0.7rem;
        height: 9rem;
      }
    }
  }
`;
