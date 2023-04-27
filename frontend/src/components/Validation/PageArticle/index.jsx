import React, { useEffect, useState } from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";

import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

import "./pageArticleStyles.css";

const PageArticle = (props) => {
    const [pdf, setPdf] = useState(null);
    const [title, setTitle] = useState("");
    const [queryParams] = useSearchParams();
    const [hash, setHash] = useState("");

    const fetchPdf = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/doc/pdf/${id}`,
                {
                    responseType: "blob",
                }
            );
            const pdfBlob = new Blob([response.data], {
                type: "application/pdf",
            });
            setPdf(URL.createObjectURL(pdfBlob));
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTitle = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/doc/${id}`);
            setTitle(response.data.name);
            setHash(response.data.hash);
        } catch (error) {
            console.error(error);
        }
    };

    const validateDoc = () => {
        console.log("hash : ", hash);
    };

    useEffect(() => {
        const articleId = queryParams.get("id");
        fetchPdf(articleId);
        fetchTitle(articleId);
    }, []);

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
                    <h2>{title}</h2>
                </div>

                <embed
                    src={pdf}
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
                        <button
                            onClick={() => validateDoc()}
                            style={{ backgroundColor: "green" }}
                        >
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
