import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import "./style.css";
import { useDispatch } from "react-redux";
import { episodeDelete } from "../../store/slices/EpisodeSlice";
import { deleteApi } from "../../adapter/api/DeleteApi";

const CommonCard = ({ element, index, image, name }) => {
  const handleDelete = async (id) => {
    const url = `http://localhost:2022/${name}/${id}`;
    await deleteApi({
      url,
      dispatch: dispatch,
      slice: episodeDelete,
      index: index,
    });
  };
  const dispatch = useDispatch();
  return (
    <div key={index} className="cart">
      <div className="imageBox">
        <img className="imge" src={image} alt="" />
      </div>
      <div className="ineerCard">{element.name}</div>
      <div className="ineerCard">
        <span className="count">{element.description}</span>
      </div>
      <div className="cardIcon">
        <GrUpdate className="icon" />
        <AiTwotoneDelete
          className="deleteIcon"
          onClick={() => handleDelete(element._id)}
        />
      </div>
    </div>
  );
};

export default CommonCard;
