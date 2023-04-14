const SignIn = () => {
    return (
        <div className="signin-container">
            <h3>Connection</h3>
            <form className="signin-form">
                <div>
                    <label>Identifiant</label>
                    <input type="text" name="username" />
                </div>

                <div>
                    <label>Mot de passe</label>
                    <input type="password" name="password" />
                </div>

                <input
                    type="button"
                    className="signin-button"
                    value="se connecter"
                />
            </form>
        </div>
    );
};
export default SignIn;
