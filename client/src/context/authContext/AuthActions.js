export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//LOGOUT

export const logout = () => ({
  type: "LOGOUT",
});

//ADD IN MY LISTS
export const addInMyListStart = () => ({
  type: "ADD_IN_MY_LIST_START",
});

export const addInMyListSuccess = (id) => ({
  type: "ADD_IN_MY_LIST_SUCCESS",
  payload: id,
});

export const addInMyListFailure = () => ({
  type: "ADD_IN_MY_LIST_FAILURE",
});

//DELETE IN MY LISTS
export const deleteInMyListStart = () => ({
  type: "DELETE_IN_MY_LIST_START",
});
export const deleteInMyListSuccess = (movie) => ({
  type: "DELETE_IN_MY_LIST_SUCCESS",
  payload: movie,
});

export const deleteInMyListFailure = () => ({
  type: "DELETE_IN_MY_LIST_FAILURE",
});
