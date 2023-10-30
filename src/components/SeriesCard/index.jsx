import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { seriesDelete } from "../../store/slices/seriesSlice";
import { deleteApi } from "../../adapter/api/DeleteApi";

const SeriesCard = ({ element, index, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (id) => {
    navigate(`${id}/season`);
  };
  const handleDelete = async (id) => {
    const url = `http://localhost:2022/series/${id}`;
    await deleteApi({
      url,
      dispatch: dispatch,
      slice: seriesDelete,
      index: index,
    });
  };

  return (
    <div key={index} className="cart">
      <div className="imageBox" onClick={() => handleNavigate(element._id)}>
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

export default SeriesCard;
