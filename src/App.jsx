import React from "react";
import { Route, Routes } from "react-router-dom";
import PageContainer from "./pages/PageContainer";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Episode from "./pages/Episode";
import Season from "./pages/Season";
import Series from "./pages/Series";
import Genre from "./pages/Genre";
import Stream from "./pages/Stream";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import SeriesSeason from "./pages/Series/Season";
import SeasonEpisode from "./pages/Season/SeasonEpisode";
import AddGenre from "./pages/Genre/AddGenre";
import AddSeries from "./pages/Series/AddSeries";
import AddEpisode from "./pages/Episode/AddEpisode";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="episode/add" element={<AddEpisode />} />

        <Route path="/" element={<PageContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/season">
            <Route index element={<Season />} />
            <Route path=":id/episodes" element={<SeasonEpisode />} />
          </Route>
          <Route path="/series">
            <Route index element={<Series />} />
            <Route path=":id/season" element={<SeriesSeason />} />
            <Route path="add" element={<AddSeries />} />
          </Route>
          <Route path="/genre">
            <Route index element={<Genre />} />
            <Route path="add" element={<AddGenre />} />
          </Route>
          <Route path="/episode">
            <Route index element={<Episode />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
