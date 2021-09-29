import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  addInMyListStart,
  addInMyListSuccess,
  addInMyListFailure,
  deleteInMyListStart,
  deleteInMyListSuccess,
  deleteInMyListFailure,
} from "./userSlice";
import { contentStart, contentSuccess, contentFailure } from "./contentSlice";
import { listsStart, listsSuccess, listsFailure } from "./listsSlice";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getRandomContent = async (type, dispatch) => {
  dispatch(contentStart());
  try {
    const res = await axios.get(`/movies/random?type=${type}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(contentSuccess(res.data[0]));
  } catch (err) {
    dispatch(contentFailure());
  }
};

export const addInMyList = async (user, id, dispatch) => {
  dispatch(addInMyListStart());
  try {
    const res = await axios.put("/users/" + user._id, id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(addInMyListSuccess(res.data));
  } catch (err) {
    dispatch(addInMyListFailure());
  }
};

export const deleteInMyList = async (user, newMovieID, dispatch) => {
  dispatch(deleteInMyListStart());
  try {
    const res = await axios.put("/users/" + user._id, newMovieID, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteInMyListSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    dispatch(deleteInMyListFailure());
  }
};

export const getRandomLists = async (type, genre, dispatch) => {
  dispatch(listsStart());
  try {
    const res = await axios.get(
      `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(listsSuccess(res.data));
  } catch (err) {
    dispatch(listsFailure());
  }
};
