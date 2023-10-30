import React, { useEffect, useState } from "react";
import EpisodeCard from "../../components/CommonCard";
import { GrAdd } from "react-icons/gr";
import { getApi } from "../../adapter/api/GetApi";
import { allEpisode } from "../../store/slices/EpisodeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Episode = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episode.episode);

  const episodeList = async () => {
    if (episode.length < 1) {
      const url = "http://localhost:2022/episodes/";
      getApi({ url, slice: allEpisode, dispatch: dispatch });
    }
  };
  useEffect(() => {
    episodeList();
  }, []);
  const addEpisode = () => {
    navigate("add");
  };
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <div className="genTitle">
          <h2 className="titleName">Episode</h2>
          <button className="btn" onClick={addEpisode}>
            <GrAdd className="addBtn" />
          </button>
        </div>
        <div div className="Container">
          {episode &&
            episode.map((element, index) => (
              <EpisodeCard
                element={element}
                image={element.thumbnail_id.image}
                index={index}
                name={"episodes"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Episode;
