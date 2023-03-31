import React from "react";

import "../styles/Body.css";
import Card from "./Card";

const Body = () => {
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
                Bienvenue sur le site qui révolutionnera le monde scientifique
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
