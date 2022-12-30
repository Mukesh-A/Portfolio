import React from "react";
import logo from "../contact.png";
import styled from "styled-components";

const Contact = () => {
  console.log(process.env.REACT_APP_CONTACT);
  return (
    <Container className="contact" id="contact">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form action={process.env.REACT_APP_CONTACT} method="POST">
          <input
            name="username"
            type="text"
            className="feedback-input"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            name="Email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="feedback-input"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="SEND" />
        </form>
      </div>
      <div className="contact-img">
        <img src={logo} />
      </div>
    </Container>
  );
};

export default Contact;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: #dbdbdb;
  display: flex;
  flex-direction: row;

  gap: 5rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }

  .contact-form {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: end;
    align-items: center;
    gap: 3rem;

    @media (max-width: 480px) {
      width: 100%;
      padding: 1rem;
    }

    form {
      max-width: 380px;
      padding-bottom: 3rem;
      /* z-index: 99; */
      .feedback-input {
        color: #777;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 500;
        font-size: 18px;
        border-radius: 5px;
        line-height: 22px;
        background-color: transparent;
        border: 1px solid #555;
        transition: all 0.3s;
        padding: 13px;
        margin-bottom: 15px;
        width: 100%;
        box-sizing: border-box;
        outline: 0;
      }

      textarea {
        height: 150px;
        line-height: 150%;
        resize: vertical;
      }

      [type="submit"] {
        width: 50%;
        display: block;
        margin: 0 auto;
        background: #682ae9;
        border-radius: 5rem;
        border: 0;
        cursor: pointer;
        color: white;
        font-size: 1.3rem;
        padding-top: 10px;
        padding-bottom: 10px;
        z-index: 50;
        transition: all 0.2s ease-in-out;
        /* margin-top: -4px; */
        font-weight: 540;
        box-shadow: rgba(161, 9, 248, 0.35) 0px 5px 15px;
      }
    }
  }

  .contact-img {
    width: 50%;
    position: relative;

    height: 100%;

    img {
      position: absolute;
      bottom: 0;
      right: 10px;
      width: 35rem;
      -webkit-filter: drop-shadow(0px -22px 100px #682ae9);
      @media (max-width: 480px) {
        height: 80%;
        width: 100%;
        right: 0;
        /* width: 100%; */
      }
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
