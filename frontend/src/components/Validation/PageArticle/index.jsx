import React from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";

import { useNavigate } from "react-router-dom";

import "./pageArticleStyles.css";

const PageArticle = () => {
    const navigate = useNavigate();
    return (
        <div className="pageArticle-container">
            <Banner />
            <div className="pageArticle-body">
                <div className="pageArticle-header">
                    <button
                        onClick={() => navigate(-1)}
                        className="pageArticle-back"
                    >
                        Retour
                    </button>
                    <h2>Titre de l'article</h2>
                </div>

                <embed
                    src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    width="80%"
                    height="1000px"
                    type="application/pdf"
                />
                <div className="pageArticle-approbation">
                    <span>
                        En tant que chercheur compétent dans le domaine de
                        l'article,
                    </span>
                    <div>
                        <button style={{ backgroundColor: "green" }}>
                            J'approuve l'article
                        </button>
                        <button
                            style={{
                                backgroundColor: "hsla(339, 49%, 30%, 1)",
                            }}
                        >
                            Je désapprouve l'article
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PageArticle;
