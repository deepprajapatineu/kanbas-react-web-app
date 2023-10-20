import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function CourseCard({ course }) {
  return (
    <div className="card text-dark">
      <div className="header-background card-header bg-primary" style={{ height: "100px" }}></div>
      <div className="card-body">
        <Link
          to={`/Kanbas/Courses/${course._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h6 className="card-title bg-white text-primary">
            {course.number} {course.name}
          </h6>
          <p className="card-text">
            Start Date: {course.startDate} | End Date: {course.endDate}
          </p>
          <i className="fa-solid fa-file-pen" style={{ fontSize: "20px" }}></i>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;