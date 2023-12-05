import UserTable from "../users/table";
import Account from "../users/account";
import Signin from "../users/signin";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


const initialCourseState = {
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
};

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = process.env.REACT_APP_BASE_URL+"/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  // const deleteCourse = async (course) => {
  //   const response = await axios.delete(
  //     `${URL}/${course._id}`
  //   );
  //   setCourses(courses.filter(
  //     (c) => c._id !== course._id));
  // };

  const updateCourse = async  () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div  className="content-div">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                course={course}
                courses={courses}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                updateCourse={updateCourse}
                deleteCourse={deleteCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;

