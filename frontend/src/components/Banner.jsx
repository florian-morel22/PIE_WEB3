import "../styles/Banner.css";
import icon_signin from "../assets/icon_signin.png";

import { Link } from "react-router-dom";
import AuthContext from "../hooks/useSession";
import { useContext } from "react";
import ConnectionMetamask from "./ConnectionMetaMask";
import ContractContext from "../hooks/useContract";

const Banner = () => {
    const { setLoggedUser } = useContext(AuthContext);
    const {contract, setContract} = useContext(ContractContext);

    const logout = () => {
        setLoggedUser(null);
    };
    return (
        <div className="banner">
            <div>
            <Link to="/" className="banner-logo">
                SCIBLOCK
            </Link>
            <div className="banner-nav-links">
                <span>Addresse du contract : {contract.address}</span>
            </div>  
            </div>
            
            

            <div className="banner-nav-links">
                <span>Découvrir le projet</span>
                <Link to="team" className="banner-nav-links-team">
                    Découvrir l'équipe
                </Link>
            </div>

        

             <div>
            <ConnectionMetamask/>
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
