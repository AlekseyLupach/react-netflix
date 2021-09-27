import axios from "axios";
import {
  addInMyListFailure,
  addInMyListStart,
  addInMyListSuccess,
  deleteInMyListFailure,
  deleteInMyListStart,
  deleteInMyListSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
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
  } catch (err) {
    dispatch(deleteInMyListFailure());
  }
};
