// Qui regroupe à la fois les actions et le reducer au même endroit.

import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    getPosts: (state, {payload}) => {
      state.posts = payload;
    }
  },
});

export const {getPosts} = postSlice.actions;
export default postSlice.reducer;