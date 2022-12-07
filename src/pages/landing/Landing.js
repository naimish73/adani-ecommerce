import React, { useEffect, useState } from "react";
import "./landing.scss";

// images
import logo from "./../../assets/adaniUniversity.jpg";
import slide1 from "./../../assets/slide1.jpeg";
import slide2 from "./../../assets/slide2.jpg";
import slide3 from "./../../assets/slide3.jpg";
import uf1 from "./../../assets/uf1.svg";
import uf2 from "./../../assets/uf2.svg";
import uf3 from "./../../assets/uf3.svg";
import uf4 from "./../../assets/uf4.svg";
import uf5 from "./../../assets/uf5.svg";
import uf6 from "./../../assets/uf6.svg";
import card1 from "./../../assets/card1.jpeg";
import card2 from "./../../assets/card2.jpg";
import card3 from "./../../assets/card3.jpeg";
// import post1 from "./../../assets/post1.jpg";
// import post2 from "./../../assets/post2.png";
// import post3 from "./../../assets/post3.jpg";
// import post4 from "./../../assets/uf6.svg";
// import googleicon from "./../../assets/google-icon.png";

// nav bar imports
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";

// slider
import Slider from "./../../Slider/Slider";

// card group imports
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// fire base

import "../../firebase/FirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { Footer } from "../../components/footer/Footer";

const Landing = () => {
    const expand = "lg";
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [user, setUser] = useState(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            // alert(`user id :  ${uid}`);
            setUser(true);
        } else {
            // User is signed out
            // ...
            navigate("/login");
        }
    });

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
            <div className="body">
                {/* <div className="hero-banner">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item className="slider">
                            <img
                                className="d-block w-100"
                                src={bg1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img
                                className="d-block w-100"
                                src={bg2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img
                                className="d-block w-100"
                                src={bg3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> */}

                <div>
                    <Slider />
                </div>

                {/* <div>
                    <div class="slideshow-container">
                        <div class="mySlides fade">
                            <div class="numbertext">1 / 3</div>
                            <img
                                src={slide1}
                                alt="img"
                                style={{ width: "100%" }}
                            />
                            <div class="text">Caption Text</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">2 / 3</div>
                            <img
                                src={slide2}
                                alt="img"
                                style={{ width: "100%" }}
                            />
                            <div class="text">Caption Two</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img
                                src={slide3}
                                alt="img"
                                style={{ width: "100%" }}
                            />
                            <div class="text">Caption Three</div>
                        </div>

                        <a class="prev" onclick="plusSlides(-1)">
                            &#10094;
                        </a>
                        <a class="next" onclick="plusSlides(1)">
                            &#10095;
                        </a>
                    </div>
                    <br />

                    <div style={{ textAlign: "center" }}>
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                    </div>
                </div> */}

                <div className="after-lendig">
                    <div className="un-gr">
                        <div className="un-gr_img">
                            <img className="img" src={uf1} alt="Third slide" />
                        </div>
                        <div className="un-gr_title un-gr_title-un">
                            UNDERGRADUATE
                        </div>
                    </div>
                    <div className="un-gr">
                        <div className="un-gr_img">
                            <img className="img" src={uf2} alt="Third slide" />
                        </div>
                        <div className="un-gr_title un-gr_title-un">
                            GRADUATE
                        </div>
                    </div>
                    <div className="un-gr">
                        <div className="un-gr_img">
                            <img className="img" src={uf3} alt="Third slide" />
                        </div>
                        <div className="un-gr_title un-gr_title-un">
                            TRANSFER
                        </div>
                    </div>
                    <div className="un-gr">
                        <div className="un-gr_img">
                            <img className="img" src={uf4} alt="Third slide" />
                        </div>
                        <div className="un-gr_title un-gr_title-un">
                            FINANCIAL AID
                        </div>
                    </div>
                    <div className="un-gr">
                        <div className="un-gr_img">
                            <img className="img" src={uf5} alt="Third slide" />
                        </div>
                        <div className="un-gr_title un-gr_title-un">VISIT</div>
                    </div>
                </div>
                <div className="downword">
                    <div className="downword_img">
                        <img className="img" src={uf6} alt="Third slide" />
                    </div>
                </div>

                <div className="about_adani">
                    <div className="div2">
                        <div className="title">
                            ABOUT ADANI INSTITUTE OF INFRASTRUCTURE
                        </div>
                        <div className="discription">
                            Adani Group, guided by the Infrastructure visionary
                            of the nation, Shri Gautam Adani, established Adani
                            Institute for Education & Research (AIER) under
                            Section 8 of the Companies Act 2013 with an
                            objective to provide the youth of the nation a
                            platform to be the “Nation Builders”. AIER is
                            instituted to impart them with requisite skills and
                            training for contributing towards nation building.
                        </div>
                        <a href="https://adaniuni.ac.in/">
                            <div className="button">
                                LEARN MORE ABOUT THE ADANI UNIVERSITY
                            </div>
                        </a>
                    </div>
                </div>
                <div className="downword">
                    <div className="downword_img">
                        <img className="img" src={uf6} alt="Third slide" />
                    </div>
                </div>
                <div className="our-programs">
                    Explore our majors & programs
                </div>
                <div>
                    <CardGroup>
                        <Card>
                            {/* <div className="card-image"> */}
                            <Card.Img variant="top" src={card1} />
                            {/* </div> */}
                            <Card.Body>
                                <Card.Title>
                                    Faculty of Management Science
                                </Card.Title>
                                <Card.Text>
                                    Building Growth with Excellence The Faculty
                                    of Management Studies focuses on management
                                    education more than just business
                                    management. The commitment is thoughtful
                                    leadership with a deep understanding of
                                    business. The approach to pedagogy combines
                                    fieldwork, case studies and instrumented
                                    feedback with a strong emphasis on concepts
                                    and theory. Take your learning and your
                                    career further by making the most of our
                                    rewarding postgraduate opportunities.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Read more ...
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            {/* <div className="card-image"> */}
                            <Card.Img variant="top" src={card2} />
                            {/* </div> */}
                            <Card.Body>
                                <Card.Title>
                                    Faculty of Engineering Science & Technology
                                </Card.Title>
                                <Card.Text>
                                    Creating a Foundation for Tomorrow’s Nation
                                    Builders Technology underpins all facets of
                                    modern life and evolves at relentless
                                    speeds. Our purpose is to educate our
                                    students to participate in creating and
                                    applying contemporary knowledge and
                                    technological advances to make a difference.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Read more ...
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            {/* <div className="card-image"> */}
                            <Card.Img variant="top" src={card3} />
                            {/* </div> */}
                            <Card.Body>
                                <Card.Title>
                                    Faculty of Doctoral Studies
                                </Card.Title>
                                <Card.Text>
                                    Adani University established in June 2022
                                    envisions nation building through
                                    transformative research, with thrust on
                                    infrastructure, energy, healthcare, and
                                    defense with underlying enabled by
                                    technology at all levels addressing
                                    well-being of the planet and people. At
                                    Adani University, education finds
                                    synchronization in transformation.
                                    Translation of information to implementation
                                    while transcending the boundaries of
                                    disciplines and self-conditioning, Adani
                                    University enables transformation of self,
                                    society, and the nation.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Read more ...
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landing;
