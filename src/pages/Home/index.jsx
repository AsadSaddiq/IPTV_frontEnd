import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";

const Home = () => {
  const count = useSelector((state) => state.user);

  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <>
          <div className="Container">
            <h1>HOME PAGE</h1>
            <h2>{count.user.first_name}</h2>
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
