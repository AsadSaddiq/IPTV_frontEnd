import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  season: [],
};

export const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    allSeason: (state, action) => {
      state.season = action.payload;
    },
    seasonDelete: (state, action) => {
      state.season.splice(action.payload, 1);
    },
  },
});

export const { allSeason, seasonDelete } = seasonSlice.actions;

export default seasonSlice.reducer;
