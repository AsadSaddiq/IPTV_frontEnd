import React, { useEffect } from "react";
import GenreCard from "../../components/GenreCard";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { allGenre } from "../../store/slices/GenreSlice";
import { useSelector, useDispatch } from "react-redux";
import { getApi } from "../../adapter/api/GetApi";
import "./style.css";

const Genre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genre = useSelector((state) => state.genre?.genre);
  const genreList = async () => {
    if (genre.length < 1) {
      const url = "http://localhost:2022/genres/";
      await getApi({ url, dispatch: dispatch, slice: allGenre });
    }
  };
  const addGenre = () => {
    navigate("add");
  };
  useEffect(() => {
    genreList();
  }, []);
  return (
    <div className="homeContainer">
      <div className="mainContainer genre">
        <div className="genTitle">
          <h2 className="titleName">Genre</h2>
          <button className="btn" onClick={addGenre}>
            <GrAdd className="addBtn" />
          </button>
        </div>
        {genre &&
          genre.map((element, index) => (
            <div key={index}>
              <GenreCard element={element} index={index} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Genre;
