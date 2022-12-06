import React from "react";
import ReactDOM from "react-dom/client";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Landing from "./pages/landing/Landing";
import CourseDetails from "./pages/course-details/CourseDetails";
import Video from "./pages/video/Video";
import Certificate from "./components/certificate/Certificate";
import Chat from "./pages/chatss/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<></>} />
            <Route path="/cart" element={<></>} />
            <Route path="/payment" element={<></>} />
            <Route path="/course" element={<></>} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/video" element={<Video />} />
            <Route path="/notes" element={<></>} />
            <Route path="/quiz" element={<></>} />
            <Route path="/discussion" element={<Chat />} />
            <Route path="/contact-us" element={<></>} />
            <Route path="/about-us" element={<></>} />
            <Route path="/certificate" element={<Certificate />} />
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
