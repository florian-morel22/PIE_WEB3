const ValidationResearch = () => {
    return (
        <form className="ValidationResearch-container">
            <label>
                <input
                    name="namearticleval"
                    type="text"
                    placeholder="Nom de l'article "
                />
            </label>

            <label>
                <input name="authorval1" type="text" placeholder="auteur 1" />
                <input name="authorval2" type="text" placeholder="auteur 2" />
                <input name="authorval3" type="text" placeholder="auteur 3" />
            </label>

            <label>
                <input type="text" placeholder="mot clé 1" />
                <input name="keywordval2" type="text" placeholder="mot clé 2" />
                <input name="keywordval3" type="text" placeholder="mot clé 3" />
            </label>

            <button type="submit">Chercher</button>
        </form>
    );
};

export default ValidationResearch;
