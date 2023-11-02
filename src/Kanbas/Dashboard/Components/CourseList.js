import { React, useState } from "react";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";
import "../index.css";
import db from "../../Database"

function CourseList({
  course,
  courses,
  setCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
}) {
  return (
    <div className="d-flex flex-row flex-wrap ms-4">
      <div className="col-12 fs-4">
        <span>Published Courses ({courses.length})</span>
      </div>
      <hr className="w-100" />
      <CourseForm
        course={course}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
      />
      <hr className="w-100" />
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
          deleteCourse={deleteCourse}
          setCourse={setCourse}
        />
      ))}
    </div>
  );
}


// function CourseList() {
//   const [courses, setCourses] = useState(db.courses);
//   const [course, setCourse] = useState({
//     name: "New Course",      number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15",
//   });

//   const addNewCourse = () => {
//     setCourses([...courses,
//               { ...course,
//                 _id: new Date().getTime() }]);
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };


//   return (
//     <div className="d-flex flex-row flex-wrap ms-4">
//       <div className="col-12 fs-4">
//         <span>Published Courses (8)</span>
//       </div>
//       <hr className="w-100" />
//       <h5>Course</h5>
//       <input value={course.name} className="form-control"
//              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
//       <input value={course.number} className="form-control"
//              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
//       <input value={course.startDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
//       <input value={course.endDate} className="form-control" type="date"
//              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
//       <button onClick={addNewCourse} >
//         Add
//       </button>

//       {courses.map((course) => (
//         <CourseCard 
//         key={course._id} 
//         course={course}  
//         deleteCourse={deleteCourse}
//         setCourse={setCourse} />
//       ))}
//     </div>
//   );
// }
export default CourseList;
