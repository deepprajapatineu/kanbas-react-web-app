import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaGripVertical,
  FaEdit,
  FaCaretDown,
} from "react-icons/fa";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  updateAssignment,
} from "./assignmentsReducer";

const AssignmentSearchBar = ({ courseId, assignment }) => {
  console.log(assignment)
  return (
    <div className="pe-0 me-0 ps-0 ms-0">
      <div className="row pt-3 pb-1 ms-0 ps-0">
        <div className="col cutom-search" >
          <input
            type="text"
            placeholder="Search Assignments"
            className="form-control w-30 w-sm-20 ms-0"
          />
        </div>
        <div className="col">

          <a className="title-buttons  btn btn-light border float-end ms-1 justify-content-center">
            <FaEllipsisV className="btnbtn-dark " />
          </a>
          {/* <button type="button" className="title-buttons btn btn-danger float-end ms-1">   */}
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/AddAssignment`}
            className="title-buttons btn btn-danger float-end ms-1 fs-5"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaPlus />
            Assignment
            </Link>
          {/* </button> */}
          <button type="button" className="title-buttons float-end btn btn-light pill-border border text-dark text-sm">
            <FaPlus style={{ color: "black" }} />
            Group
          </button>

          

        </div>
      </div>
    </div>
  );
};

const AssignmentList = ({ courseId, assignments, dispatch }) => {
  return (
    <ul className="list-group">
      <div className="col-12 border-start border-3 border-success assignment-table mb-5">
        {assignments.map((assignment, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(deleteAssignment(assignment._id))}
              className="delete-button btn btn-danger float-end "
              // style={{ fontSize: "12px", marginTop: "auto", marginBottom: "auto", }}
            >
              Delete
            </button>
            <FaGripVertical
              className="float-start me-3 fs-5"
              style={{ color: "black", marginTop: "2%" }}
            />
            <FaEdit
              className="float-start me-3 fs-5 text-success"
              style={{ color: "black", marginTop: "2%" }}
            />
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="fs-5"
             
            >
              {assignment.title}
            </Link>
            <br />
            <p>
              {assignment.details} | {assignment.dueDate} |{" "}
              {assignment.availableFromDate} | {assignment.availableUntilDate}
            </p>
          </li>
        ))}
      </div>
    </ul>
  );
};


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const assignment = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  console.log(assignment);
  return (
    <div style={{ marginRight: "100px" }}>
      <AssignmentSearchBar courseId={courseId} assignment={assignment} />
      <hr className="hr-grow" />
      <div className="row">
        <AssignmentList
          courseId={courseId}
          assignments={assignment}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
export default Assignments;
