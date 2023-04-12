import React, { useState, useEffect } from "react";

const SignUp = () => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <div className="signup-container">
            <h3>Inscription</h3>
            <form className="signup-form">
                <span className="signup-name">
                    <div>
                        <label>Nom</label>
                        <input type="text" name="last-name" />
                    </div>

                    <div>
                        <label>Prénom</label>
                        <input type="text" name="first-name" />
                    </div>
                </span>

                <div>
                    <label>Identifiant</label>
                    <input type="text" name="username" />
                </div>

                <div>
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                </div>

                <div>
                    <label>Confirmation du Mot de passe</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        style={{
                            borderColor:
                                password1 !== password2 &&
                                password2 !== "" &&
                                "red",
                        }}
                    />
                </div>

                <input
                    type="button"
                    className="signup-button"
                    value="s'inscrire"
                />
            </form>
        </div>
    );
};
export default SignUp;
