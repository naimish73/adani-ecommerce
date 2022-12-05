import React, { useState } from "react";
import "./register.scss";

import googleSVG from "./../../assets/googleSVG.svg";
import { useNavigate } from "react-router-dom";

// firebase files
import "../../firebase/FirebaseAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();

    function navigateToLogin() {
        navigate("/login");
    }

    function registeruser(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        // alert(`${email}  , ${password}`);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("user is register");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`error: ${errorMessage}`);
            });
    }

    return (
        <>
            <div className="register">
                <div className="box">
                    <div className="left">
                        <form>
                            <h1>Create Account</h1>
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
                            <span>
                                or register your details and create account
                            </span>
                            <input type="text" placeholder="Name" id="name" />
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
                            <button onClick={registeruser}>Sign Up</button>
                            <div className="loginLinkText">
                                already have an account,{" "}
                                <span
                                    className="loginLink"
                                    onClick={navigateToLogin}
                                >
                                    login here
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

export default Register;
