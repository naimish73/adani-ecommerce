import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
    const { imgUrl, title, lesson, students, rating } = props.item;
    const navigate = useNavigate();

    const openCourse = () => {
        navigate("/course", {
            state: { imgUrl, title, lesson, students, rating },
        });
    };

    return (
        <div className="single__course__item" onClick={openCourse}>
            <div className="course__img">
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="course__details">
                <h6 className="course__title mb-4">{title}</h6>

                <div className=" d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                        <i class="ri-book-open-line"></i> {lesson} Lessons
                    </p>

                    <p className="students d-flex align-items-center gap-1">
                        <i class="ri-user-line"></i> {students}K
                    </p>
                </div>

                <div className=" d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i> {rating}K
                    </p>

                    <p className="enroll d-flex align-items-center gap-1">
                        <a href="https://rzp.io/l/R3yqvgx1gz"> Enroll Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
