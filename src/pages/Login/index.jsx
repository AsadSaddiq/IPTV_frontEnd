import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/slices/UserSlice";
import * as yup from "yup";
import "./styles.css";
import axios from "axios";
import Cookies from "js-cookie";

export const Login = () => {
  const dispatch = useDispatch();
  const defaultValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Please Enter Your email"),
    password: yup.string().required("Please Enter Your password"),
  });
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    let data = values;
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:2022/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios.request(config);
      if (response.data.status !== 200) {
        alert(response?.data?.data?.message);
      } else {
        const accessToken = response.data.data.accessToken;
        const data = response.data.data.user;
        console.log(data);
        Cookies.set("accessToken", accessToken);
        dispatch(login(data));
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="registerContainer">
      <div className="formContainer">
        <span className="heading">Login</span>
        <span className="heading title">Welcome Back</span>
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="field">
              <Field
                className="inputField"
                type="text"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <span className="field">
              <ErrorMessage className="clrs" name="email" />
            </span>

            <div className="field">
              <Field
                className="inputField"
                type="text"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            <span className="field">
              <ErrorMessage className="clrs" name="password" />
            </span>

            <div className="field">
              <button className="inputField btn" type="submit">
                Submit
              </button>
              <span>
                <NavLink to="/register">signup</NavLink>
              </span>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
