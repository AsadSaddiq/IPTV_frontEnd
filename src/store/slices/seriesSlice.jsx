import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
};

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    allSeries: (state, action) => {
      state.series = action.payload;
    },
    seriesDelete: (state, action) => {
      state.series.splice(action.payload, 1);
    },
  },
});

export const { allSeries, seriesDelete } = seriesSlice.actions;

export default seriesSlice.reducer;
