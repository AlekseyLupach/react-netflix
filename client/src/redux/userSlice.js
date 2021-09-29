import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    eror: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
      state.isFetching = null;
    },
    logout: (state) => {
      state.error = false;
      state.isFetching = false;
      state.user = localStorage.setItem("user", null);
    },
    addInMyListStart: (state) => {
      state.isFetching = true;
    },
    addInMyListSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    addInMyListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteInMyListStart: (state) => {
      state.isFetching = true;
    },
    deleteInMyListSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    deleteInMyListFailure: (state) => {
      state.isFetching = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  addInMyListStart,
  addInMyListSuccess,
  addInMyListFailure,
  deleteInMyListStart,
  deleteInMyListSuccess,
  deleteInMyListFailure,
} = userSlice.actions;
export default userSlice.reducer;
