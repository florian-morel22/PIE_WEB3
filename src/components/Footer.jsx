import React from "react";

import header_background from "../assets/header_background.png";

import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <img
                className="footer-background"
                src={header_background}
                alt="background image"
            ></img>
        </footer>
    );
};

export default Footer;
