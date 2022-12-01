import React from "react";
import "./register.scss";

const Register = () => {
    return (
        <>
            <div className="register">
                <div className="box">
                    <div className="left">
                        <form>
                            <h1>Create Account</h1>
                            <span>
                                register your details and create account
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
