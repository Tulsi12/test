import React from "react";
//import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Homepage/homepage";
import AdminLogin from "../Registration/adminLogin";
import Login from "../Registration/Login";
import Admindashboard from "./AdminDashboard";
import Editor from "./Code Editor/Editor";
import CoursePayment from "./coursepayment";
import AddChapter from "./Courses/addChapter";
import CourseAdd from "./Courses/addcourse";
import CourseDetail from "./Courses/coursedetail";
import Courses from "./Courses/courses";
import CourseDashboard from "./Courses/coursesdashboard";
import CourseDetailUpdate from "./Courses/courseupdate";
import EnrolledCourses from "./Courses/enrolledcourses";
import ForgotPassword from "./forgot-password";
import ResetPassword from "./reset-password";
import UserProfile from "./userprofile";
import UserDashboard from "./Users/Userdashboard";
import UserDetailUpdate from "./Users/UserDetailUpdate";

function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<UserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courseinsert" element={<CourseAdd />} />
        <Route path="/admin" element={<Admindashboard />} />
        <Route path="/admin/users" element={<UserDashboard />} />
        <Route path="/user/update/:userid" element={<UserDetailUpdate />} />
        <Route path="/admin/courses" element={<CourseDashboard />} />
        <Route
          path="/course/update/:courseid"
          element={<CourseDetailUpdate />}
        />
        <Route path="/course/addchapter/:id" element={<AddChapter />} />
        <Route path="/payment" element={<CoursePayment />} />
        <Route path="/enrolledcourses" element={<EnrolledCourses />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
}

export default Body;
