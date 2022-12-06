import React, { useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "./../../../assets/slide1.jpeg";
import courseImg2 from "./../../../assets/slide2.jpg";
import courseImg3 from "./../../../assets/slide3.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

let coursesData = [
    {
        id: "01",
        title: "Artificial Intelligence Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },
    {
        id: "02",
        title: "Machine Learning Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },
    {
        id: "03",
        title: "Data Science Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
    {
        id: "01",
        title: "Artificial Intelligence Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },
    {
        id: "02",
        title: "Machine Learning Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },
    {
        id: "03",
        title: "Data Science Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
];
let aiCourseData = [
    {
        id: "01",
        title: "Artificial Intelligence Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },
    {
        id: "01",
        title: "Artificial Intelligence Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },
    {
        id: "01",
        title: "Artificial Intelligence Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1,
    },
];
let mlCourseData = [
    {
        id: "02",
        title: "Machine Learning Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },
    {
        id: "02",
        title: "Machine Learning Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },
    {
        id: "02",
        title: "Machine Learning Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2,
    },
];
let dsCourseData = [
    {
        id: "03",
        title: "Data Science Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
    {
        id: "03",
        title: "Data Science Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
    {
        id: "03",
        title: "Data Science Bootcamp 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3,
    },
];

const Courses = () => {
    const onButtonClick = () => {
        console.log("course data before: ", coursesData);
        const seeAllData = [
            {
                id: "01",
                title: "Artificial Intelligence Bootcamp 2022",
                lesson: 12,
                students: 12.5,
                rating: 5.9,
                imgUrl: courseImg1,
            },

            {
                id: "02",
                title: "Machine Learning Bootcamp 2022",
                lesson: 12,
                students: 12.5,
                rating: 5.9,
                imgUrl: courseImg2,
            },

            {
                id: "03",
                title: "Data Science Bootcamp 2022",
                lesson: 12,
                students: 12.5,
                rating: 5.9,
                imgUrl: courseImg3,
            },
        ];

        coursesData = [...seeAllData, ...coursesData];
        console.log("see all data: ", seeAllData);
        console.log("course data after: ", coursesData);
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Our Popular Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae consequatur libero
                                    quod voluptatibus ullam quia quas, vitae
                                    voluptatem recusandae reprehenderit!
                                </p>
                            </div>

                            {/* <div className="w-50 text-end">
                                <button className="btn" onClick={onButtonClick}>
                                    See All
                                </button>
                            </div> */}
                        </div>
                    </Col>
                    {coursesData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Artificial Intelligence Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae consequatur libero
                                    quod voluptatibus ullam quia quas, vitae
                                    voluptatem recusandae reprehenderit!
                                </p>
                            </div>

                            {/* <div className="w-50 text-end">
                                <button className="btn" onClick={onButtonClick}>
                                    See All
                                </button>
                            </div> */}
                        </div>
                    </Col>
                    {aiCourseData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Machine Learning Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae consequatur libero
                                    quod voluptatibus ullam quia quas, vitae
                                    voluptatem recusandae reprehenderit!
                                </p>
                            </div>

                            {/* <div className="w-50 text-end">
                                <button className="btn" onClick={onButtonClick}>
                                    See All
                                </button>
                            </div> */}
                        </div>
                    </Col>
                    {mlCourseData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h2>Data Science Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae consequatur libero
                                    quod voluptatibus ullam quia quas, vitae
                                    voluptatem recusandae reprehenderit!
                                </p>
                            </div>

                            {/* <div className="w-50 text-end">
                                <button className="btn" onClick={onButtonClick}>
                                    See All
                                </button>
                            </div> */}
                        </div>
                    </Col>
                    {dsCourseData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default React.memo(Courses);
