import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeasonCard from "../../../components/SeasonCard";
import axios from "axios";
import "./style.css";

const SeriesSeason = () => {
  const { id } = useParams();
  const [seriesSeason, setSeriesSeason] = useState([]);
  const [seriesName, setSeriesName] = useState();
  const seriesListApi = async () => {
    const apiData = await axios.get(
      `http://localhost:2022/series/${id}/season`
    );
    setSeriesSeason(apiData.data.data[0].season);
    setSeriesName(apiData.data.data[0].name);
    console.log(apiData.data.data[0].season);
    console.log(apiData.data.data[0].name);
  };

  useEffect(() => {
    seriesListApi();
  }, []);
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <h2 className="nameHeading">{seriesName}</h2>
        <div div className="Container">
          {seriesSeason.map((element, index) => {
            return <SeasonCard element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SeriesSeason;
