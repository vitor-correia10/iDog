import React from "react";
import { NavLink } from "react-router-dom"
import idog from "../assets/idog.png";
import { SiDatadog } from "react-icons/si";
import "./Header.css";

function Header() {
  return (
    <header>
      <NavLink to="/">
          <img src={idog} alt="iDog Logo" className="logo"/>
        </NavLink>
      <div>
        <SiDatadog className="dogs-list"/>
      </div>
    </header>
  );
}

export default Header;
