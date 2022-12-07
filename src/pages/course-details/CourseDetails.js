import React from "react";
import "./coursedetails.scss";

//images
import logo from "./../../assets/adaniUniversity.jpg";
import slide1 from "./../../assets/slide1.jpeg";
import slide2 from "./../../assets/slide2.jpg";
import slide3 from "./../../assets/slide3.jpg";
import slide4 from "./../../assets/slide4.jpeg";

// nav bar imports
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";

// course img imports
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { CCarousel, CCarouselItem, CImage } from "@coreui/bootstrap-react";
import Courses from "./Courses-section/Courses";

const CourseDetails = () => {
    const expand = "lg";

    return (
        <>
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
                                    <a href="#" class="sign-up">
                                        Sign Up
                                    </a>
                                    <a href="#" class="sign-in">
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
                                    <a href="#" class="sign-up">
                                        Sign Up
                                    </a>
                                    <a href="#" class="sign-in">
                                        Sign In
                                    </a>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

                <div>
                    <Courses />
                </div>
            </div>
        </>
    );
};

export default CourseDetails;
