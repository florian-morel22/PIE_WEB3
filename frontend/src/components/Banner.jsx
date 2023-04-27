import "../styles/Banner.css";
import icon_signin from "../assets/icon_signin.png";

import { Link } from "react-router-dom";
import AuthContext from "../hooks/useSession";
import { useContext } from "react";

const Banner = () => {
    const { setLoggedUser } = useContext(AuthContext);

    const logout = () => {
        setLoggedUser(null);
    };
    return (
        <div className="banner">
            <Link to="/" className="banner-logo">
                SCIBLOCK
            </Link>

            <div className="banner-nav-links">
                <span>Découvrir le projet</span>
                <Link to="team" className="banner-nav-links-team">
                    Découvrir l'équipe
                </Link>
            </div>
            <Link to="signin">
                <div className="banner-signin" onClick={logout}>
                    <img
                        src={icon_signin}
                        alt="icon sign in"
                        className="banner-icon_signin"
                    />
                </div>
            </Link>
        </div>
    );
};

export default Banner;
