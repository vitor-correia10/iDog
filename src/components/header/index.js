import React from 'react';
import idog from '../assets/idog.png';
import { SiDatadog } from "react-icons/si";
import './Header.css';

function Header() {
  return (
    <header>
      <div>
          <img src={idog} alt="iDog Logo" class="logo"/>
      </div>
      <div>
        <SiDatadog class="dogs-list"/>
      </div>
    </header>
  );
}

export default Header;
