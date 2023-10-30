import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const defaultValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    rePassword: "",
  };
  const validationSchema = yup.object().shape({
    first_name: yup.string().required("Please Enter Your first Name"),
    last_name: yup.string().required("Please Enter Your last Name"),
    email: yup.string().email().required("Please Enter Your email"),
    password: yup.string().required("Password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (values) => {
    delete values.rePassword;
    let data = values;
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:2022/user/registration",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <span className="heading">Register</span>
        <span className="heading">WELCOME</span>
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
                name="first_name"
                placeholder="First Name"
              />
            </div>
            <span className="field">
              <ErrorMessage className="err" name="first_name" />
            </span>
            <div className="field">
              <Field
                className="inputField"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <span className="field">
              <ErrorMessage className="err" name="last_name" />
            </span>
            <div className="field">
              <Field
                className="inputField"
                type="text"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <span className="field">
              <ErrorMessage className="err" name="email" />
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
              <ErrorMessage className="err" name="password" />
            </span>
            <div className="field">
              <Field
                className="inputField"
                type="text"
                name="rePassword"
                placeholder="Confirm Password"
              />
            </div>
            <span className="field">
              <ErrorMessage className="err" name="rePassword" />
            </span>
            <div className="field">
              <button className="inputField button" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
