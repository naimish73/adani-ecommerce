import React from "react";
import "./login.scss";

import googleSVG from "./../../assets/googleSVG.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    function navigateToRegister() {
        navigate("/register");
    }
    return (
        <>
            <div className="login">
                <div className="box">
                    <div className="left">
                        <form>
                            <h1>Sign in</h1>
                            <div className="google-btn">
                                <div className="google-icon-wrapper">
                                    <img
                                        className="google-icon"
                                        src={googleSVG}
                                        alt="google svg"
                                    />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                            <span>or sign in with your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="www.google.com">Forgot your password?</a>
                            <button>Sign In</button>
                            <div className="registerLinkText">
                                do not have an account,{" "}
                                <span
                                    className="registerLink"
                                    onClick={navigateToRegister}
                                >
                                    reigster here
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
};

export default Login;
