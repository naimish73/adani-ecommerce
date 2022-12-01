import React from "react";
import "./register.scss";

import googleSVG from "./../../assets/googleSVG.svg";

const Register = () => {
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
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
};

export default Register;
