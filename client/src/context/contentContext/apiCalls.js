import axios from "axios";
import {
  getRandomContentFailure,
  getRandomContentStart,
  getRandomContentSuccess,
} from "./ContentActions";

export const getRandomContent = async (type, dispatch) => {
  dispatch(getRandomContentStart());
  try {
    const res = await axios.get(`/movies/random?type=${type}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getRandomContentSuccess(res.data[0]));
  } catch (err) {
    dispatch(getRandomContentFailure());
  }
};
