import React from "react";
import { genreDelete, genreUpdate } from "../../store/slices/GenreSlice";
import { useDispatch } from "react-redux";
import { deleteApi } from "../../adapter/api/DeleteApi";
import { updateApi } from "../../adapter/api/UpdateApi";
import "./style.css";

const GenreCard = ({ element, index }) => {
  const dispatch = useDispatch();
  const deleteGenre = async (id) => {
    const url = `http://localhost:2022/genres/${id}`;
    await deleteApi({
      url,
      dispatch: dispatch,
      slice: genreDelete,
      index: index,
    });
  };
  const updateGenre = async (id) => {
    const update = prompt("Genre name", element.name);
    if (update != null && update != element.name) {
      const url = `http://localhost:2022/genres/${id}`;
      await updateApi({
        url,
        dispatch: dispatch,
        slice: genreUpdate,
        index: index,
        data: { name: update },
      });
    } else {
      alert("change the name of genre");
    }
  };
  return (
    <div className="genreContainer">
      <div>{element.name}</div>
      <div>
        <button className="btn" onClick={() => updateGenre(element._id)}>
          update
        </button>
        <button className="btn" onClick={() => deleteGenre(element._id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default GenreCard;
