import React, { useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../Banner";
import Footer from "../Footer";
import ValidationResearch from "./ValidationResearch";

import "./validationStyles.css";

import icon_research from "../../assets/icon_research.png";

const listArticlesJSON = [
    {
        key: 1,
        title: "Boundary loss for highly unbalanced segmentation",
        authors: ["Auteur 1", "Auteur 2", "Auteur 3"],
        keywords: ["Mot clé 1", "Mot clé 2", "Mot clé 3"],
        abstract: "Abstract de l'article 1",
        valid: 0,
        unvalid: 0,
    },
    {
        key: 2,
        title: "Bounding boxes for weakly supervised segmentation: Global constraints get close to full supervision",
        authors: ["Auteur 1", "Auteur 2", "Auteur 3"],
        keywords: ["Mot clé 1", "Mot clé 2", "Mot clé 3"],
        abstract: "Abstract de l'article 1",
        valid: 2,
        unvalid: 0,
    },
    {
        key: 3,
        title: "Curriculum semi-supervised segmentation",
        authors: ["Auteur 1", "Auteur 2", "Auteur 3"],
        keywords: [
            "Artificial Intelligence",
            "Digital Manufacturing",
            "Blockchain",
        ],
        abstract: "Abstract de l'article 1",
        valid: 7,
        unvalid: 1,
    },
    {
        key: 4,
        title: "Few-Shot Segmentation Without Meta-Learning: A Good Transductive Inference Is All You Need?",
        authors: ["H Kervadec", "M Boudiaf", "ZI Masud"],
        keywords: ["Mot clé 1", "Mot clé 2", "Mot clé 3"],
        abstract: "Abstract de l'article 1",
        valid: 1,
        unvalid: 10,
    },
    {
        key: 5,
        title: "Beyond pixel-wise supervision: semantic segmentation with higher-order shape descriptors",
        authors: ["Auteur 1", "Auteur 2", "Auteur 3"],
        keywords: ["Mot clé 1", "Mot clé 2", "Mot clé 3"],
        abstract: "Abstract de l'article 1",
        valid: 1,
        unvalid: 8,
    },
];

function Validation() {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="validation-container">
            <Banner />
            <div className="validation-body">
                <h2>Valider un article</h2>
                <button onClick={() => setShowForm(!showForm)}>
                    {!showForm ? "Faire une recherche" : "Fermer la recherche"}
                </button>
                {showForm && <ValidationResearch />}

                <div>
                    {listArticlesJSON.map((article) => (
                        <Article article={article} key={article.key} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const Article = ({ article }) => {
    return (
        <div className="article-container">
            <div className="article-header">
                <h3>{article.title}</h3>
                <p className="article-valid">{article.valid} &#9989;</p>
                <p>{article.unvalid} &#10060;</p>
            </div>

            <p>
                Auteurs : {article.authors[0].length > 0 && article.authors[0]},{" "}
                {article.authors[1].length > 0 && article.authors[1]},{" "}
                {article.authors[2].length > 0 && article.authors[2]}
            </p>
            <p>
                Mots clés :{" "}
                {article.keywords[0].length > 0 && article.keywords[0]},{" "}
                {article.keywords[1].length > 0 && article.keywords[1]},{" "}
                {article.keywords[2].length > 0 && article.keywords[2]}
            </p>

            <Link to="pageArticle" className="article-button_seeMore">
                Voir plus
            </Link>
        </div>
    );
};

export default Validation;
