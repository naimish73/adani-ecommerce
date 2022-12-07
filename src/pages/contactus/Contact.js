import React from "react";
import "./contact.scss";

// image
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
import { Footer } from "../../components/footer/Footer";

const Contact = () => {
    const expand = "lg";
    const map =
        'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

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
            <section className="contacts padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact us</h1>
                        <p>
                            We're open for any suggestion or just to have a chat
                        </p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>
                                    Shantigram Township, Nr.Vaishnodevi Circle,
                                    Sarkhej - Gandhinagar Hwy, PO, Adalaj,
                                    Gujarat 382421
                                </p>
                            </div>
                            <div className="box">
                                <h4>EMAIL:</h4>
                                <p> info.aiie@aii.ac.in</p>
                            </div>
                            <div className="box">
                                <h4>PHONE:</h4>
                                <p> + 090999 00872</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="flexSB">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <input type="text" placeholder="Subject" />
                            <textarea cols="30" rows="10">
                                Create a message here...
                            </textarea>
                            <button className="primary-btn">
                                SEND MESSAGE
                            </button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
