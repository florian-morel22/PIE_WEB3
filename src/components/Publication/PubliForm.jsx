const PubliForm = () => {
    return (
        <div className="pub-form-container">
            <form>
                <label>
                    Nom de l'article <input type="text" />
                </label>

                <label>
                    Description <input type="text" />
                </label>

                <label>
                    Auteur <input type="text" />
                </label>
            </form>
        </div>
    );
};

export default PubliForm;
