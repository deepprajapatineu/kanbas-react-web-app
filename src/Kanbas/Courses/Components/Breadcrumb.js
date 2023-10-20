import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars, FaChevronRight } from "react-icons/fa";

import "../index.css";

function Breadcrumb({ courseName }) {
  const { courseId } = useParams();
  //const history = useHistory();

  let arr = window.location.hash.split("/");

  return (
    <div className="row fs-4 mt-2 ps-0 pb-0 d-none d-md-block">
      <nav
        style={{ "--bs-breadcrumb-divider": ">", paddingLeft: "25px" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb mb-0">
          <li className="me-4 menu-icon">
            <a href="#">
              <FaBars style={{ color: "#000000" }} />
            </a>
          </li>
          <li className="me-4 menu-icon2">
            <a href="#">
              <FaBars style={{ color: "#000000" }} />
            </a>
          </li>
          <li className="breadcrumb-item me-2">
            <Link
              to={`/Kanbas/Courses/${courseId}/Home`}
              className="text-decoration-none text-danger"
            >
              {courseName}
            </Link>
          </li>
          <li className="me-2">
            <FaChevronRight style={{ color: "#000000" }} />
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {arr[arr.length - 1]}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
