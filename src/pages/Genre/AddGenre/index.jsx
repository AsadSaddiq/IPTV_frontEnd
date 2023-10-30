import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postApi } from "../../../adapter/api/PostApi";
import { genrePost } from "../../../store/slices/GenreSlice";
const AddGenre = () => {
  const dispatch = useDispatch();
  const defaultValue = {
    name: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please Enter Name"),
  });
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const url = "http://localhost:2022/genres";
    const data = values;
    postApi({ url, dispatch: dispatch, data: data, slice: genrePost });
    navigate("/genre");
  };

  return (
    <div className="registerContainer">
      <div className="formContainer">
        <span className="heading">Genre</span>
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
                name="name"
                placeholder="Enter Genre Name"
              />
            </div>
            <span className="field">
              <ErrorMessage className="clrs" name="name" />
            </span>
            <div className="field">
              <button className="inputField btn" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default AddGenre;
