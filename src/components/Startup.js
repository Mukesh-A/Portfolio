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
 
  text-align: center;

  .slide-up-inner {
    background-color: #0e1212;
    padding-top: 50vh;
    
    overflow: hidden;
    p {
      animation: 3s slide-up;
      color: #555;
      

      font-size: 2rem;
      font-weight: 500;
      font-style: italic;
      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
  }
`;
