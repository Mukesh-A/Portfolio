import React from "react";
import logo from "../contactus.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Contact us</h1>
      </div>
      <div className="contact-img">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Contact;
