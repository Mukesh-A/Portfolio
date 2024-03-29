import React, { useEffect, useState } from "react";
import logo from "../img3.png";
import styled from "styled-components";
import { HiOutlineDownload } from "react-icons/hi";
import client from "../client";

const HomePage = () => {
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
  return (
    <Container className="home" id="hero">
      {/* <span>`</span> */}
      <div className="home-content">
        <span className="main_text">Hi,I'm</span>
        <span className="main_text_name"> {`<Mukesh />`}</span>
        <h3 className="fullstack">FullStack Developer</h3>
        <h3
          className="npm"
          onClick={() =>
            postData[1].skill[0] && window.open(postData[1].skill[0])
          }
        >
          {`> npm install @mukesh/resume `}
          <HiOutlineDownload className="download--icon" />
        </h3>
      </div>
      <div className="img-container">
        <img className="img-to-fit" src={logo} alt="Mukesh" />
      </div>
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  /* background-color: #0e1212; */
  display: flex;
  height: 100vh;
  width: 100vw;
  /* margin: auto; */
  /* justify-content: center; */
  align-items: center;

  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.65) 100%
  );

  .home-content {
    width: 75%;
    animation: 2s home-content;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    /* border: 1px solid red; */
    letter-spacing: 0.05em;

    @media (max-width: 480px) {
      width: 100%;
    }
    .main_text {
      font-weight: 500;
      color: #dbdbdb;
    }
    .main_text_name {
      font-weight: 600;
      color: #682ae9;

      cursor: pointer;
    }

    .fullstack {
      color: #777;
      font-weight: 500;
      font-size: 1.5rem;
      padding-left: 0.3rem;
    }

    .npm {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        Liberation Mono, Courier New, monospace;
      font-size: 1rem;
      color: #dbdbdb;
      font-weight: 500;
      /* outline: 0.1em inset #777; */
      border-radius: 10px;
      padding: 0.7rem;
      display: flex;
      gap: 0.7rem;
      margin: 1.5rem auto;
      justify-content: center;
      align-items: center;
      width: 24rem;
      height: 2.3rem;
      cursor: pointer;
      box-shadow: rgba(161, 9, 248, 0.55) 0px 5px 50px;
      letter-spacing: 0.1em;
      @media (max-width: 480px) {
        width: 18rem;
        height: 1.8rem;
        font-size: 0.85rem;
        padding: 0.4rem;
        letter-spacing: 0.03em;
      }
    }
    .download--icon {
      color: #888;
      font-size: 1.1rem;
      vertical-align: bottom;
      /*  */
      @media (max-width: 480px) {
        font-size: 0.95rem;
      }
    }

    @media (max-width: 480px) {
      .main_text {
        font-size: 2rem;
      }
      .main_text_name {
        font-size: 1.7rem;
      }
      .fullstack {
        font-size: 1.2rem;
      }
      .image {
        width: 0;
      }
    }
  }

  .img-container {
    /* border: 2px solid red; */
    justify-content: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    height: 100%;
    opacity: 0.5;
    filter: drop-shadow(0 0.3rem 6rem #682ae9);

    .img-to-fit {
      flex: 1;
      height: 100%;
      /* filter: hue-rotate(90deg) brightness(10%) grayscale(10%); */
      @media (max-width: 480px) {
        display: none;
      }
    }
  }
`;
