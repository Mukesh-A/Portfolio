import React, { useEffect, useState } from "react";
import logo from "../me.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import styled from "styled-components";
import client from "../client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const mukesh = "Mukesh";

  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]|order(_createdAt asc){
          skill
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error());
  }, []);
  console.log("ab", postData);
  const notify = () => {
    navigator.clipboard.writeText("mukeshabhi08@gmail.com");
    toast("mukeshabhi08@gmail.com copied to Clipboard");
  };
 
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
              <HiOutlineMail onClick={notify} />
            </li>
            <li>
              <FaGithub
                onClick={() => window.open("https://github.com/Mukesh-A")}
              />
            </li>
            {/* <li>
              <FiFigma />
            </li> */}
          </ul>
          <button
            onClick={() =>
              postData[1].skill[0] && window.open(postData[1].skill[0])
            }
            className="resume"
          >
            Resume
          </button>
        </div>
        <span className="about_description">
          // <label>I</label> completed my MCA(8CGPA) at Bangalore Institute of
          Technology. A self taught fullstack developer. I am hard-working,
          autonomous and passionate about development. I love learning new
          things everyday and creating new projects. Hope to work with you soon!
          //
          <br />
        </span>
        <p>skills</p>
        <div className="sub-div">
          {postData &&
            postData[0]?.skill.map((item, index) => {
              return (
                <span key={index} className="sub">
                  {item}
                </span>
              );
            })}
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }

  img {
    height: 100%;
    -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
    @media (max-width: 480px) {
      margin-left: auto;
      height: 80%;
    }
  }

  .about_right {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 5rem;

    gap: 0.5rem;

    @media (max-width: 480px) {
      padding: 0.5rem;

      font-size: 1rem;

      width: 98%;
    }
    .about_details {
      color: #dbdbdb;

      font-size: 3rem;
      font-weight: 700;

      letter-spacing: 0.05em;
      @media (max-width: 480px) {
        height: 6rem;
        font-size: 2.5rem;
      }
      .about_details_name {
        color: #682ae9;
        height: 100vh;
        font-size: 3rem;
        font-weight: 700;

        letter-spacing: 0.05em;
        @media (max-width: 480px) {
          font-size: 2.6rem;

          padding: 0;
        }
      }
    }
    .about_icons {
      display: flex;
      align-items: center;
      height: 2rem;

      .about_icons_ul li {
        display: inline-block;
        text-align: center;
        padding: 1rem;
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
        }
      }
      @media (max-width: 480px) {
        height: 3.7rem;
      }
    }
    .about_description {
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
        height: 13rem;
      }
    }
    p {
      color: #dbdbdb;
      font-size: 1.6rem;
      font-weight: 700;
      padding: 0.3rem;
    }
    .sub-div {
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
        font-size: 1rem;
        width: 100%;
        padding: 0.2rem;
        align-items: center;
        justify-content: center;
        margin-top: 0.7rem;
        height: 9rem;
      }
    }
  }
`;
