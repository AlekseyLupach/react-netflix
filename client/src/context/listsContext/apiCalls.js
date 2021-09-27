import axios from "axios";
import {
  getRandomListsFailure,
  getRandomListsStart,
  getRandomListsSuccess,
} from "./ListsActions";

export const getRandomLists = async (type, genre, dispatch) => {
  dispatch(getRandomListsStart());
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
    dispatch(getRandomListsSuccess(res.data));
  } catch (err) {
    dispatch(getRandomListsFailure());
  }
};
