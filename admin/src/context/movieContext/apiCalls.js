import {
  createMovieFAILURE,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFAILURE,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFAILURE,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFAILURE,
  updateMovieStart,
  updateMovieSuccess,
} from "./MovieActions";
import axios from "axios";

//GET
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFAILURE());
  }
};

//DELETE
export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFAILURE());
  }
};

//CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
    res.data &&  window.location.replace("/movies/");
  } catch (err) {
    dispatch(createMovieFAILURE());
  }
};

//UPDATE
export const updateMovie = async (id, newMovie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    await axios.put("/movies/" + id, newMovie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateMovieSuccess(id));
  } catch (err) {
    dispatch(updateMovieFAILURE());
  }
};