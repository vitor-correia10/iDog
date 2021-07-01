import React from 'react';

//components
import logo from '../assets/vitorCorreia.png';

//style
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div>
            <a href="https://github.com/vitor-correia10" target="_blank" rel="noreferrer">
                github
            </a>
            <a href="https://www.linkedin.com/in/vitor-correia" target="_blank" rel="noreferrer">
                linkedin
            </a>
            </div>
            <img src={logo} alt="Vitor Correia logo"/>
        </footer>
    )
}

export default Footer;