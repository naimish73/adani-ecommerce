import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

// images
import slide1 from "./../assets/slide1.jpeg";
import slide2 from "./../assets/slide2.jpg";
import slide3 from "./../assets/slide3.jpg";
import slide4 from "./../assets/slide4.jpeg";
import slide5 from "./../assets/slide5.jpg";

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);
    const images = [slide1, slide2, slide3, slide4, slide5];

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={
                            slideIndex === index + 1
                                ? "slide active-anim"
                                : "slide"
                        }
                    >
                        <img
                            src={images[index]}
                            alt="img"
                            className="slider-image-div"
                        />

                        <div className="side-content">
                            <div className="stitle">
                                The Best Online Learning Platform
                            </div>
                            <div className="sdiscription">
                                <p>
                                    Vero elitr justo clita lorem. Ipsum dolor at
                                    sed stet sit diam no. Kasd rebum ipsum et
                                    diam justo clita et kasd rebum sea sanctus
                                    eirmod elitr.
                                </p>
                            </div>
                            <div className="sbtn"></div>
                        </div>
                    </div>
                );
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={
                            slideIndex === index + 1 ? "dot active" : "dot"
                        }
                    ></div>
                ))}
            </div>
        </div>
    );
}
