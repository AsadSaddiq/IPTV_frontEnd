import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import * as yup from "yup";
import axios from "axios";
import { allGenre } from "../../../store/slices/GenreSlice";

const AddSeries = () => {
  const genre = useSelector((state) => state.genre.genre);

  const checkGenre = async () => {
    console.log(genre);
    if (genre.length < 1) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:2022/genres",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await axios.request(config);
        console.log(response);
        dispatch(allGenre(response.data.data));
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    checkGenre();
  }, []);
  const dispatch = useDispatch();
  const defaultValue = {
    genre: "",
    name: "",
    trailer_id: "",
    thumbnail_id: "",
  };

  const validationSchema = yup.object().shape({
    genre: yup.string().required("Please select a genre"),
    name: yup.string().required("Pleas enter series name"),
    description: yup.string().required("enter series description"),
    trailer_id: yup.mixed().required("select an image"),
    thumbnail_id: yup.mixed().required("select an image"),
  });
  const navigate = useNavigate();
  // const handleSubmit = async (values) => {
  //   let data = values;
  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "http://localhost:2022/user/login",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };
  //   try {
  //     const response = await axios.request(config);
  //     if (response.data.status !== 200) {
  //       alert(response?.data?.data?.message);
  //     } else {
  //       const data = response.data.data.user;
  //       console.log(data);
  //       dispatch(login(data));
  //       navigate("/series");
  //     }
  //   } catch (error) {}
  // };
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="homeContainer">
      <div className="mainContainer genre">
        <div className="FormContainer">
          <span className="heading">Series</span>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
          >
            <Form>
              <div className="Field">
                <Field as="select" name="selectedOption" className="inputField">
                  <option
                    value=""
                    label="select a Genre"
                    className="inputField"
                  />
                  {genre.map((option, index) => (
                    <option key={index} value={option}>
                      {option.name}
                    </option>
                  ))}
                </Field>
              </div>
              <span className="Field">
                <ErrorMessage className="clrs" name="genre" />
              </span>
              <div className="Field">
                <Field
                  className="inputField"
                  type="text"
                  name="name"
                  placeholder="Enter series name"
                />
              </div>
              <span className="field">
                <ErrorMessage className="clrs" name="name" />
              </span>
              <div className="Field">
                <Field
                  className="inputField"
                  type="text"
                  name="description"
                  placeholder="Enter series description"
                />
              </div>
              <span className="field">
                <ErrorMessage className="clrs" name="description" />
              </span>
              <div className="Field">
                <Field
                  type="file"
                  id="trailer_id"
                  name="trailer_id"
                  onChange={(event) => {
                    setFieldValue("trailer_id", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <span className="field">
                <ErrorMessage className="clrs" name="trailer_id" />
              </span>
              <div className="Field">
                <Field
                  type="file"
                  id="thumbnail_id"
                  name="thumbnail_id"
                  onChange={(event) => {
                    setFieldValue("thumbnail_id", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <span className="field">
                <ErrorMessage className="clrs" name="thumbnail_id" />
              </span>
              <div className="Field">
                <button className="inputField " type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddSeries;
