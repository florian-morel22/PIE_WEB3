import React, { useState } from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import PubliForm from "./PubliForm";
import ModalPub from "./ModalPub";

import "./publicationStyles.css";

function Publication() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="publication-container">
            <Banner />
            <div className="publication-body">
                <h2>Publier mon article</h2>
                <PubliForm />
            </div>
            <Footer />

            {showModal && <ModalPub />}
        </div>
    );
}

export default Publication;
