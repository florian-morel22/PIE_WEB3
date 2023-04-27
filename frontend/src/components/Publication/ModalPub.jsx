import React from "react";
import { Link } from "react-router-dom";

const ModalPub = ({ setShowModal }) => {
    const setModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="modalPub-layer">
            <div className="modalPub-container">
                <span>Votre article a été publié avec succès !</span>
                <Link
                    onClick={() => setModalClose()}
                    to="/"
                    className="modalPub-link"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default ModalPub;
