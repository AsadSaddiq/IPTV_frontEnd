import React, { useEffect } from "react";
import SeriesCard from "../../components/SeriesCard";
import { GrAdd } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { getApi } from "../../adapter/api/GetApi";
import { allSeries } from "../../store/slices/seriesSlice";
import { useNavigate } from "react-router-dom";

const Series = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const series = useSelector((state) => state.series.series);
  const seriesList = async () => {
    if (series.length < 1) {
      const url = "http://localhost:2022/series/";
      await getApi({ url, dispatch: dispatch, slice: allSeries });
    }
  };
  useEffect(() => {
    seriesList();
  }, []);
  const addSeries = () => {
    navigate("add");
  };
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <div className="genTitle">
          <h2 className="titleName">Series</h2>
          <button className="btn" onClick={addSeries}>
            <GrAdd className="addBtn" />
          </button>
        </div>
        <div div className="Container">
          {series &&
            series.map((element, index) => (
              <SeriesCard
                element={element}
                image={element.thumbnail_id.image}
                index={index}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
