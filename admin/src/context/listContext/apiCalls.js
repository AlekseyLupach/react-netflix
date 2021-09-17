import {
  createListFAILURE,
  createListStart,
  createListSuccess,
  deleteListFAILURE,
  deleteListStart,
  deleteListSuccess,
  getListsFAILURE,
  getListsStart,
  getListsSuccess,
  updateListFAILURE,
  updateListStart,
  updateListSuccess,
} from "./ListActions";
import axios from "axios";

//GET
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFAILURE());
  }
};

//DELETE
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFAILURE());
  }
};

//CREATE
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFAILURE());
  }
};

//UPDATE
export const updateList = async (id, newList, dispatch) => {
  dispatch(updateListStart());
  try {
    await axios.put("/lists/" + id, newList, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(id));
  } catch (err) {
    dispatch(updateListFAILURE());
  }
};