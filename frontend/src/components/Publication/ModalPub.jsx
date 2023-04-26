import React from "react";
import { Link } from "react-router-dom";

const ModalPub = ({ setShowModal, content }) => {
    const setModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="modalPub-layer">
            <div className="modalPub-container">
                {content === "validation" ? (
                    <>
                        <span>Votre article a été publié avec succès !</span>
                        <Link
                            onClick={() => setModalClose()}
                            to="/"
                            className="modalPub-link"
                        >
                            Retour à l'accueil
                        </Link>
                    </>
                ) : content === "errorNetwork" ? (
                    <>
                        <span>
                            Une erreur s'est produite. Réessayez de publier
                            votre article à un autre moment.
                        </span>
                        <Link
                            onClick={() => setModalClose()}
                            to="/"
                            className="modalPub-link"
                        >
                            Retour à l'accueil
                        </Link>
                    </>
                ) : (
                    <>
                        {" "}
                        <span>
                            Pour publier votre article vous devez renseigner :
                        </span>
                        <ul className="modalPub-ul">
                            <li>Le nom de l'article</li>
                            <li>L'abstract</li>
                            <li>le nom d'au moins un auteur</li>
                            <li>Au moins un mot clé</li>
                            <li>Le fichier pdf de votre article</li>
                        </ul>
                        <button
                            onClick={() => setModalClose()}
                            className="modalPub-link"
                        >
                            Retour à la publication
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalPub;
