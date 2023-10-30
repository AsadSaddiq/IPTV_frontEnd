import React, { useEffect } from "react";
import SeasonCard from "../../components/SeasonCard";
import { getApi } from "../../adapter/api/GetApi";
import { useDispatch, useSelector } from "react-redux";
import { allSeason } from "../../store/slices/seasonSlice";

const Season = () => {
  const dispatch = useDispatch();
  const season = useSelector((state) => state.season.season);
  const seasonList = async () => {
    if (season.length < 1) {
      const url = "http://localhost:2022/seasons/";
      await getApi({ url, dispatch: dispatch, slice: allSeason });
    }
  };
  useEffect(() => {
    seasonList();
  });
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <h2 className="titleName">Season</h2>
        <div className="Container">
          {season.map((element, index) => (
            <SeasonCard element={element} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Season;
