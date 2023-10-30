import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteApi } from "../../adapter/api/DeleteApi";
import { seasonDelete } from "../../store/slices/seasonSlice";
import "./style.css";

const SeasonCard = ({ element, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigate(`/season/${element._id}/episodes`);
  };
  const handleDelete = async (id) => {
    const url = `http://localhost:2022/seasons/${id}`;
    await deleteApi({
      url,
      dispatch: dispatch,
      slice: seasonDelete,
      index: index,
    });
  };

  return (
    <div className="seasonContainer">
      <div className="seasonSection" onClick={handleNavigate}>
        <div className="seasonName">{element.name}</div>
        <div className="seasonDescription">{element.description}</div>
      </div>
      <div className="seasonBtn">
        <button className="btn" onClick={() => handleDelete(element._id)}>
          delete
        </button>
        <button className="btn">update</button>
      </div>
    </div>
  );
};

export default SeasonCard;
