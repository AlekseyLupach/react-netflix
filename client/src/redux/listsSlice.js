import { createSlice } from "@reduxjs/toolkit";

export const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
    isFetching: false,
    eror: false,
  },
  reducers: {
    listsStart: (state) => {
      state.isFetching = true;
    },
    listsSuccess: (state, action) => {
      state.lists = action.payload;
      state.isFetching = false;
    },
    listsFailure: (state) => {
      state.isFetching = null;
      state.error = true;
    },
  },
});

export const { listsStart, listsSuccess, listsFailure } = listsSlice.actions;
export default listsSlice.reducer;
