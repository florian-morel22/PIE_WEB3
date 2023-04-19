import "../styles/Banner.css";
import ConnectionMetamask from "./ConnectionMetaMask";
import icon_signin from "../assets/icon_signin.png";

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        
        <nav className="banner">
            
            <Link to="/" className="banner-logo">
                PIE WEB3
            </Link>
            
            <div className="banner-nav-links">
                <span>Découvrir le projet</span>
                <span>Découvrir l'équipe</span>
            </div>
            <div className="banner-meta">
                <ConnectionMetamask/>
            </div>

            <span>Account Number : </span>
            <Link to="/signin" className="banner-signin">
                <img
                    src={icon_signin}
                    alt="icon sign in"
                    className="banner-icon_signin"
                />
            </Link>
                       
        </nav>
    );
};

export default Banner;
