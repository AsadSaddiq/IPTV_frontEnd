import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: [],
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    allGenre: (state, action) => {
      state.genre = action.payload;
    },
    genreDelete: (state, action) => {
      state.genre.splice(action.payload, 1);
    },
    genrePost: (state, action) => {
      state.genre.push(action.payload);
    },
    genreUpdate: (state, action) => {
      console.log(action.payload.id);
      state.genre.splice(action.payload.id, 1, action.payload.data);
    },
  },
});

export const { allGenre, genreDelete, genrePost, genreUpdate } =
  genreSlice.actions;

export default genreSlice.reducer;
