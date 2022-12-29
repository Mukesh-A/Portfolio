import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Navbar from "./components/Nav/Navbar";
import Startup from "./components/Startup";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import styled from "styled-components";

function App() {
  /// bring flower bracket icon from https://fontawesome.com/icons/bracket-curly?s=duotone&f=classic
  // divide home page into ratios for image placemnet

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Startup />
      ) : (
        <>
          <HomePage />
          <About />
          <Project />
          <Contact />
          <Footer />
          {/* <ScrollToTop /> */}
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;
