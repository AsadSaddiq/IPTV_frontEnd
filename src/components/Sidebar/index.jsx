import React from "react";
import "./style.css";
import { LiaStreamSolid } from "react-icons/lia";
import {
  FaCaretSquareRight,
  FaChalkboardTeacher,
  FaPuzzlePiece,
  FaTransgender,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideContainer">
      <div className="sideLink">
        <NavLink className="link" to="genre">
          <FaTransgender className="sideLogo" />
          <span>Genre</span>
        </NavLink>
      </div>

      <div className="sideLink">
        <NavLink className="link" to="series">
          <FaCaretSquareRight className="sideLogo" />
          <span>Series</span>
        </NavLink>
      </div>
      <div className="sideLink">
        <NavLink className="link" to="season">
          <FaChalkboardTeacher className="sideLogo" />
          <span>Season</span>
        </NavLink>
      </div>
      <div className="sideLink">
        <NavLink className="link" to="episode">
          <FaPuzzlePiece className="sideLogo" />
          <span>Episode</span>
        </NavLink>
      </div>
      <div className="sideLink">
        <NavLink className="link" to="stream">
          <LiaStreamSolid className="sideLogo" />
          <span>Stream</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
