import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EpisodeCard from "../../../components/CommonCard";

const SeasonEpisode = () => {
  const { id } = useParams();
  console.log(id);
  const [seasonEpisode, setSeasonEpisode] = useState([]);
  const [seasonName, setSeasonName] = useState([]);

  const seriesListApi = async () => {
    const apiData = await axios.get(
      `http://localhost:2022/seasons/${id}/episodes`
    );
    setSeasonEpisode(apiData.data.data[0].episode);
    setSeasonName(apiData.data.data[0].name);
    console.log(apiData.data);
  };

  useEffect(() => {
    seriesListApi();
  }, []);
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <h2 className="nameHeading">{seasonName}</h2>
        <div div className="Container">
          {seasonEpisode.map((element, index) => {
            return (
              <EpisodeCard
                element={element}
                image={element.thumbnail_id[0].image}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeasonEpisode;
