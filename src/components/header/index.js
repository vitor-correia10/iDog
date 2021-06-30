import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import idog from "../assets/idog.png";
import { SiDatadog } from "react-icons/si";
import "./Header.css";

function Header() {
  const images = useSelector((state) => state.myListReducer);
  const imageCount = Object.keys(images).length;

  return (
    <header>
      <nav>
        <NavLink to="/">
            <img src={idog} alt="iDog Logo" className="logo"/>
        </NavLink>
        <Link to="/my-list">
          <SiDatadog className="dogs-list"/>
          <span className="image-count">{imageCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
