import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import PubliForm from "./PubliForm";

import "./publicationStyles.css";

import icon_research from "../../assets/icon_research.png";

function Publication() {
    return (
        <div className="publication-container">
            <Banner />
            <div className="publication-body">
                <h2>Publier mon article</h2>
                <PubliForm />
            </div>
            <Footer />
        </div>
    );
}

export default Publication;
