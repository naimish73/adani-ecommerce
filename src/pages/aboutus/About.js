import React from "react";
import "./about.scss";

import { Container, Row, Col } from "reactstrap";
import aboutImg from "./../../assets/au.jpg";
import CountUp from "react-countup";

// images
import logo from "./../../assets/adaniUniversity.jpg";

// nav bar imports
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";

const About = () => {
    const expand = "lg";
    return (
        <div>
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

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="about__img">
                                <img src={aboutImg} alt="" className="w-100" />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="about__content">
                                <h2>About Us</h2>
                                <p>
                                    Adani Institute of Infrastructure
                                    Engineering (AIIE) is established to equip
                                    the students to become modern day engineers
                                    and managers primarily for the
                                    infrastructure and allied sectors.
                                </p>

                                <div className="about__counter">
                                    <div className=" d-flex gap-5 align-items-center">
                                        <div className="single__counter">
                                            <span className="counter">
                                                <CountUp
                                                    start={0}
                                                    end={42}
                                                    duration={2}
                                                    suffix="+"
                                                />
                                            </span>

                                            <p className="counter__title">
                                                Teachers
                                            </p>
                                        </div>

                                        <div className="single__counter">
                                            <span className="counter">
                                                <CountUp
                                                    start={0}
                                                    end={6}
                                                    duration={2}
                                                    suffix="K+"
                                                />
                                            </span>

                                            <p className="counter__title">
                                                Enrolled Students
                                            </p>
                                        </div>
                                    </div>

                                    <div className=" d-flex gap-5 align-items-center">
                                        <div className="single__counter">
                                            <span className="counter">
                                                <CountUp
                                                    start={0}
                                                    end={40}
                                                    duration={2}
                                                    suffix="+"
                                                />
                                            </span>

                                            <p className="counter__title">
                                                Industry Connections
                                            </p>
                                        </div>

                                        <div className="single__counter">
                                            <span className="counter">
                                                <CountUp
                                                    start={0}
                                                    end={5}
                                                    duration={2}
                                                    suffix="K+"
                                                />
                                            </span>

                                            <p className="counter__title">
                                                Placements
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default About;
