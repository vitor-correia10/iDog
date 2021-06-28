import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./FourOhFour.css";

const FourOhFour = () => {
  return (
    <>
      <div className="page-container">
        <h1 className="error-title">
          <BiError /> Sorry, page not found <BiError />
        </h1>
        <h3 className="error-subtitle">
          Click <Link className="styled-link" to="/">here</Link> to return home.
        </h3>
      </div>
    </>
  );
};

export default FourOhFour;