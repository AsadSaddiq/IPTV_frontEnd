import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import genreReducer from "./slices/GenreSlice";
import episodeReducer from "./slices/EpisodeSlice";
import seasonReducer from "./slices/seasonSlice";
import seriesReducer from "./slices/seriesSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    genre: genreReducer,
    episode: episodeReducer,
    season: seasonReducer,
    series: seriesReducer,
  },
});

export default store;
