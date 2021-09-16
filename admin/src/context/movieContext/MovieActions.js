export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getMoviesFAILURE = () => ({
  type: "GET_MOVIE_FAILURE",
});

//DELETE
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFAILURE = () => ({
  type: "DELETE_MOVIE_FAILURE",
});

//CREATE
export const createMovieStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const createMovieFAILURE = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

//UPLOAD
export const uploadMovieStart = () => ({
  type: "UPLOAD_MOVIE_START",
});

export const uploadMovieSuccess = (movie) => ({
  type: "UPLOAD_MOVIE_SUCCESS",
  payload: movie,
});

export const uploadMovieFAILURE = () => ({
  type: "UPLOAD_MOVIE_FAILURE",
});
