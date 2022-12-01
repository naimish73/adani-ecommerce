import React from "react";
import "./login.scss";

const Login = () => {
    return (
        <>
            <div className="login">
                <div className="box">
                    <div className="left">
                        <form>
                            <h1>Sign in</h1>
                            <span>sign in with your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <image href="#">Forgot your password?</image>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    );
};

export default Login;
