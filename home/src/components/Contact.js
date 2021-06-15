import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div>
    Contact Page
    <Link to="/">
      <button style={{ backgroundColor: "gray", color: "black" }}>Home</button>
    </Link>
  </div>
);

export default Contact;
