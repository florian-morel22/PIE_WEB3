import React from "react";

import "../styles/Body.css";
import Card from "./Card";

const Body = () => {
    const connetWallet = ()=>{

    }

    const [CardOpen, setCardOpen] = React.useState({
        uploadCard: false,
        checkCard: false,
    });

    const openCard = (box) => {
        box === "Upload"
            ? setCardOpen({ uploadCard: true, checkCard: false })
            : box === "Check"
            ? setCardOpen({ uploadCard: false, checkCard: true })
            : setCardOpen({ uploadCard: false, checkCard: false });
    };

    return (
        <div className="body">
            <div className="welcome">
                
                    <h4>WEB3 PIE, La solution dont vous avez besoin</h4>
                    <p className="text">Vérification sure de documents scientifiques.</p>
                    <p className="text">ebvkh.</p>

                    <button type="button" onClick={connetWallet} className="button_click">
                        <p className="text2">Connect to Wallet</p>
                    </button>

            </div>

            <div className="cards">
                <Card
                    onClick={openCard}
                    opened={CardOpen.uploadCard}
                    title="Upload"
                />
                <Card
                    onClick={openCard}
                    opened={CardOpen.checkCard}
                    title="Check"
                />
            </div>
        </div>
    );
};

export default Body;
