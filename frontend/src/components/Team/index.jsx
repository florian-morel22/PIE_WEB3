import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import "./teamStyles.css";

const Team = () => {
    return (
        <div className="team-container">
            <Banner />
            <div className="team-body">
                <h2>Publier mon article</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
