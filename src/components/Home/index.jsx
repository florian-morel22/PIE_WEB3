import React from "react";

import Banner from "../Banner";
import Footer from "../Footer";
import HeaderHome from "./HeaderHome";
import "./homeStyles.css";

import icon_research from "../../assets/icon_research.png";

function Home() {
    return (
        <div className="home-container">
            <Banner />
            <div className="home-body">
                <HeaderHome />
                <div className="home-actions">
                    <div className="home-left">
                        <h2>Publier un article</h2>
                        <p>
                            Vous voulez sécuriser votre publication en ligne ?
                            Importez votre publication du pdf et attendez que
                            d’autres chercheurs le valident !
                        </p>
                        <button>Publier</button>
                    </div>
                    <div className="home-right">
                        <h2>Vérifier un article</h2>
                        <p>
                            Entrez le sujet de l’article dont vous êtes experts,
                            et notez-le pour que la communauté scientifique
                            sache si on peut lui faire confiance !
                        </p>
                        <div className="home-input-check">
                            <input
                                type="search"
                                placeholder="Rentrez un sujet"
                            ></input>
                            <button>
                                {" "}
                                <img src={icon_research} alt="icon research" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
