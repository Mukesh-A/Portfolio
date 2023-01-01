import React from "react";
import styled from "styled-components";

const Startup = () => {
  return (
    <Container className="slide-up">
      <div className="slide-up-inner">Select * from Mukesh</div>
    </Container>
  );
};

export default Startup;
const Container = styled.div`
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;

  .slide-up-inner {
    width: 22ch;
    animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    color: #777;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`;
