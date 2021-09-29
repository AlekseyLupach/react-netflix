import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    content: [],
    isFetching: false,
    eror: false,
  },
  reducers: {
    contentStart: (state) => {
      state.isFetching = true;
    },
    contentSuccess: (state, action) => {
      state.content = action.payload;
      state.isFetching = false;
    },
    contentFailure: (state) => {
      state.isFetching = null;
      state.error = true;
    },
  },
});

export const { contentStart, contentSuccess, contentFailure } =
  contentSlice.actions;
export default contentSlice.reducer;
