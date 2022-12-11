import React, { useState } from "react";
import "./register.scss";

import googleSVG from "./../../assets/googleSVG.svg";
import { useNavigate } from "react-router-dom";
import { FunctionsOutlined } from "@material-ui/icons";

// firebase files
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPWfxMve13iaOkmUs8EDn7Zu2UNOFzQog",
    authDomain: "adani-mooc.firebaseapp.com",
    projectId: "adani-mooc",
    storageBucket: "adani-mooc.appspot.com",
    messagingSenderId: "161778570951",
    appId: "1:161778570951:web:8799b97847da3e28e090e2",
    measurementId: "G-3DH8RPVLV2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

const Register = () => {
    const navigate = useNavigate();

    function navigateToLogin() {
        navigate("/login");
    }

    function registeruser(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var name = document.getElementById("name").value;
        // alert(`${email}  , ${password}`);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                // stor user name

                // Add a new document in collection "cities"
                await setDoc(doc(db, "user-name", user.uid), {
                    name: name,
                });

                // try {
                //     const docRef = await addDoc(collection(db, `user-name`), {
                //         name: name,
                //     });
                //     console.log("Document written with ID: ", docRef.id);
                // } catch (e) {
                //     console.error("Error adding document: ", e);
                // }

                alert(`user is register${user.uid}`);

                // console.log(user.uid);
                // navigate("/");
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
