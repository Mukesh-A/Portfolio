import React from "react";
import styled from "styled-components";

const Startup = () => {
  return (
    <Container className="slide-up">
      <div className="slide-up-inner">
        <p>Select * from Mukesh</p>
      </div>
    </Container>
  );
};

export default Startup;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 1px solid black; */
  text-align: center;

  /* @media (max-width: 480px) {
  .slide-up {
 display: none;
  }
} */
  .slide-up-inner {
    background-color: #0e1212;
    padding-top: 50vh;
    /* border: 1px solid rebeccapurple; */
    overflow: hidden;
    p {
      animation: 3s slide-up;
      color: #555;
      /* margin-top:30%; */
      /* background: -webkit-linear-gradient(#777, #777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
      /* font-family: 'Allura', cursive; */
      /* font-family: 'Sacramento', cursive; */

      font-size: 3rem;
      font-weight: 500;
      @media (max-width: 480px) {
        
          font-size: 1.3rem;
        
      }
    }
  }
`;
