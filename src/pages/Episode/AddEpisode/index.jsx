import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function addEpisode() {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [file, setFile] = useState(null);
  const [episodeData, setEpisodeData] = useState({
    season_id: "",
    name: "",
    description: "",
  });
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEpisodeData({
      ...episodeData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const fileResponse = await axios.post(
        "http://localhost:2022/files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(fileResponse);
      const fileId = fileResponse.data.fileId;
      const episodeWithFileId = { ...episodeData, fileId };
      const episodeResponse = await axios.post(
        "http://localhost:2022/episodes",
        episodeWithFileId
      );
      console.log(episodeResponse);
      console.log("Episode saved with ID:", episodeResponse.data.episodeId);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="main_Container">
      <div className="mainContainer">
        <form onSubmit={handleSubmit}>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select an option</option>
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <input type="file" name="file" onChange={handleFileChange} />
          <input
            type="text"
            name="season_id"
            placeholder="Season ID"
            value={episodeData.season_id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Episode Name"
            value={episodeData.name}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Episode Description"
            value={episodeData.description}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default addEpisode;
