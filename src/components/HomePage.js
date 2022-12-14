import React from "react";
import logo from "../img3.png";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container className="home" id="hero">
      {/* <span>`</span> */}
      <div className="home-content">
        <span className="main_text">Hi,I'm</span>
        <span className="main_text_name"> Mukesh()</span>
        {/* <span>`</span> */}
        <h3 className="fullstack">FullStack Developer</h3>
      </div>
      <div className="img-container">
        <img className="img-to-fit" src={logo} alt="Mukesh"/>
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
