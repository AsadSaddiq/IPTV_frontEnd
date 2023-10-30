import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episode: [],
};

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    allEpisode: (state, action) => {
      state.episode = action.payload;
    },
    episodeDelete: (state, action) => {
      state.episode.splice(action.payload, 1);
    },
  },
});

export const { allEpisode, episodeDelete } = episodeSlice.actions;

export default episodeSlice.reducer;
