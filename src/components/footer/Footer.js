import React from "react";
import "./footer.scss";

import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "./../../assets/adaniUniversity.jpg";

export const Footer = () => {
    return (
        <CDBFooter className="shadow footer">
            <CDBBox
                display="flex"
                flex="column"
                className="mx-auto py-5"
                style={{ width: "90%" }}
            >
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    className="flex-wrap"
                >
                    <CDBBox>
                        <a
                            href="/"
                            className="d-flex align-items-center p-0 text-dark"
                        >
                            <img alt="logo" src={logo} width="30px" />
                            <span className="ml-3 h5 font-weight-bold">
                                Adani University
                            </span>
                        </a>
                        <p className="my-3" style={{ width: "250px" }}>
                            Adani Institute of Infrastructure Engineering (AIIE)
                            is established to equip the students to become
                            modern day engineers.
                        </p>
                        <CDBBox display="flex" className="mt-4">
                            <a href="https://www.facebook.com/AdaniUniversity/">
                                <CDBBtn flat color="dark">
                                    <CDBIcon fab icon="facebook-f" />
                                </CDBBtn>
                            </a>
                            <a href="https://twitter.com/adaniuniversity">
                                <CDBBtn flat color="dark" className="mx-3">
                                    <CDBIcon fab icon="twitter" />
                                </CDBBtn>
                            </a>
                            <a href="">
                                <CDBBtn flat color="dark" className="p-2">
                                    <CDBIcon fab icon="instagram" />
                                </CDBBtn>
                            </a>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                            Adani University
                        </p>
                        <CDBBox
                            flex="column"
                            style={{ cursor: "pointer", padding: "0" }}
                        >
                            {/* <CDBFooterLink href="/">Resources</CDBFooterLink> */}
                            <CDBFooterLink href="/">About Us</CDBFooterLink>
                            <CDBFooterLink href="/">Contact</CDBFooterLink>
                            {/* <CDBFooterLink href="/">Blog</CDBFooterLink> */}
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                            Help
                        </p>
                        <CDBBox
                            flex="column"
                            style={{ cursor: "pointer", padding: "0" }}
                        >
                            {/* <CDBFooterLink href="/">Support</CDBFooterLink> */}
                            <CDBFooterLink href="/register">
                                Sign Up
                            </CDBFooterLink>
                            <CDBFooterLink href="/login">Sign In</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                            Cources
                        </p>
                        <CDBBox
                            flex="column"
                            style={{ cursor: "pointer", padding: "0" }}
                        >
                            <CDBFooterLink href="/course-details/#ai">
                                Artifical Intelligence
                            </CDBFooterLink>
                            <CDBFooterLink href="/course-details/#ml">
                                Machine Learning
                            </CDBFooterLink>
                            <CDBFooterLink href="/course-details/#ds">
                                Data Science
                            </CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">
                    &copy; Adani Univerisy, 2022. All rights reserved.
                </small>
            </CDBBox>
        </CDBFooter>
    );
};
