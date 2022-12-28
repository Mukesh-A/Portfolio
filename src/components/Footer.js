import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container className="footer">
      <span>Designed & Developed with 💜</span>
      <p className="name">Mukesh . A</p>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  width: 100vw;
  text-align: center;
  padding: 10px;
  height: 70px;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.65) 100%
  );

  color: #777;
  font-size: 1rem;
  font-weight: 500;

  .name {
    font-family: "Allura", cursive;
    font-size: 1.6rem;
    /* font-weight: 600; */
  }
`;
