import Banner from "../Banner";
import Footer from "../Footer";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./sign_Styles.css";

const Sign_ = () => {
    return (
        <div className="sign_-container">
            <Banner />
            <div className="sign_-body">
                <div className="signin">
                    <SignIn />
                </div>
                <div className="signup">
                    <SignUp />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Sign_;
