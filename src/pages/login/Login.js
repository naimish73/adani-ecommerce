import React from "react";
import "./login.scss";

import googleSVG from "./../../assets/googleSVG.svg";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();

    function navigateToRegister() {
        navigate("/register");
    }
    function userlogin(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
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
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                            />
                            <a href="www.google.com">Forgot your password?</a>
                            <button onClick={userlogin}>Sign In</button>
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
