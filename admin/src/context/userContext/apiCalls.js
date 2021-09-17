import {
  deleteUserFAILURE,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFAILURE,
  getUsersStart,
  getUsersSuccess,
  uploadUserFAILURE,
  uploadUserStart,
  uploadUserSuccess,
} from "./UserActions";
import axios from "axios";

//GET
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFAILURE());
  }
};

//DELETE
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFAILURE());
  }
};

//UPDATE
export const updateUser = async (id, newUser, dispatch) => {
  dispatch(uploadUserStart());
  try {
    await axios.put("/users/" + id, newUser, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(uploadUserSuccess(id));
  } catch (err) {
    dispatch(uploadUserFAILURE());
  }
};
