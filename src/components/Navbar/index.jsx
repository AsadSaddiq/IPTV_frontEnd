import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";

import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="logoSection">
          <NavLink className="navlink" to="/">
            <h2>IPTV</h2>
          </NavLink>
        </div>
        <div className="linkContainer">
          <NavLink className="navlink" to="/">
            <AiFillHome />
            <span>Home</span>
          </NavLink>
          <NavLink className="navlink" to="about">
            <FcAbout />
            About
          </NavLink>
          <NavLink className="navlink" to="contact">
            <IoMdContacts />
            Contact
          </NavLink>
          <NavLink className="navlink" to="login">
            <IoMdContacts />
            Login
          </NavLink>
          <NavLink className="navlink" to="register">
            <IoMdContacts />
            Register
          </NavLink>
          <NavLink className="navlink" to="admin">
            <IoMdContacts />
            Admin
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
