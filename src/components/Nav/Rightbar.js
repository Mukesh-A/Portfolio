import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
export const Rightbar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link activeClass="active" smooth spy to="hero">
          mukesh()
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy to="about">
          about ()
        </Link>
      </li>
      <li>
        <Link activeClass="active" smooth spy to="project">
          project()
        </Link>
      </li>
      <li>
        <Link activeClass="active" offset={70} smooth spy to="contact">
          contact()
        </Link>
      </li>
    </Ul>
  );
};
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  height: 3rem;

  position: fixed;
  top: 0;
  right: 0;
  gap: 1rem;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
  box-shadow: 0 0 60px #0e1212;

  li {
    list-style: none;

    color: #777;
    padding: 18px;
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: end;
    cursor: pointer;
  }
  li .active {
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0e12129e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 2.5rem 1rem;
    transition: transform 1s ease-in-out;
    li {
      color: white;
      font-size: 1.6rem;
    }
    li .active {
      color: #777;
    }
  }
`;
