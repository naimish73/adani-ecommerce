import React from "react";
import { useState } from "react";
import "./quiz.scss";

// images
import logo from "./../../assets/adaniUniversity.jpg";

// nav bar imports
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";

const Quiz = () => {
    const expand = "lg";

    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            text: "What is the capital of America?",
            options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Boston", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
            ],
        },
        {
            text: "What year was the Constitution of America written?",
            options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
            ],
        },
        {
            text: "Who was the second president of the US?",
            options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
            ],
        },
        {
            text: "What is the largest state in the US?",
            options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
            ],
        },
        {
            text: "Which of the following countries DO NOT border the US?",
            options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
            ],
        },
    ];

    // Helper Functions

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };
    return (
        <>
            <Navbar
                sticky="top"
                key={expand}
                bg="light"
                expand={expand}
                className="mb-3 navbarMain"
            >
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="adani logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavba    rLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Adani MOOC Portal
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="searchbar serch-right">
                                <form class="nosubmit">
                                    <input
                                        class="nosubmit"
                                        type="search"
                                        placeholder="Search..."
                                    />
                                </form>
                            </div>
                            <div class="header-btn btn-mobile">
                                <a href="../register/" class="sign-up">
                                    Sign Up
                                </a>
                                <a href="../login/" class="sign-in">
                                    Sign In
                                </a>
                            </div>
                            <Nav className="justify-content-start flex-grow-1 pe-3 dropdown">
                                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                                <NavDropdown
                                    title="Courses "
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="/course-details/#ds">
                                        Data Science
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/course-details/#ai">
                                        Artificial Intelligence
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/course-details/#ml">
                                        Machine Learning
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1">Home</Nav.Link>
                            </Nav>
                            {/* <Form className="d-flex form-search">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 search"
                                    aria-label="Search"
                                />
                                <Button
                                    variant="outline-success"
                                    id="search-btn"
                                >
                                    Search
                                </Button>
                            </Form> */}
                            <div className="searchbar serch-left">
                                <form class="nosubmit">
                                    <input
                                        class="nosubmit"
                                        type="search"
                                        placeholder="Search..."
                                    />
                                </form>
                            </div>
                            <div class="header-btn btn-desc">
                                <a href="../register/" class="sign-up">
                                    Sign Up
                                </a>
                                <a href="../login/" class="sign-in">
                                    Sign In
                                </a>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="App">
                {/* 1. Header  */}
                <h1>USA Quiz 🇺🇸</h1>

                {/* 2. Current Score  */}
                <h2>Score: {score}</h2>

                {/* 3. Show results or show the question game  */}
                {showResults ? (
                    /* 4. Final Results */
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {score} out of {questions.length} correct - (
                            {(score / questions.length) * 100}%)
                        </h2>
                        <button onClick={() => restartGame()}>
                            Restart game
                        </button>
                    </div>
                ) : (
                    /* 5. Question Card  */
                    <div className="question-card">
                        {/* Current Question  */}
                        <h2>
                            Question: {currentQuestion + 1} out of{" "}
                            {questions.length}
                        </h2>
                        <h3 className="question-text">
                            {questions[currentQuestion].text}
                        </h3>

                        {/* List of possible answers  */}
                        <ul>
                            {questions[currentQuestion].options.map(
                                (option) => {
                                    return (
                                        <li
                                            key={option.id}
                                            onClick={() =>
                                                optionClicked(option.isCorrect)
                                            }
                                        >
                                            {option.text}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Quiz;
