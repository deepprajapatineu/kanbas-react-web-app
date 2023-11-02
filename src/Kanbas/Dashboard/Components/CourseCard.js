import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import db from "../../Database"

function 




CourseCard({ course, deleteCourse, setCourse }) {


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
            Start Date: {course.startDate} <br/> End Date: {course.endDate}
          </p>
          <i className="fa-solid fa-file-pen" style={{ fontSize: "20px" }}></i>
          <button
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
            className="btn btn-warning m-2"
          >
            Edit
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
            className="btn btn-danger m-1"
          >
            Delete
          </button>

        </Link>
      </div>
    </div>
  );
}

export default CourseCard;