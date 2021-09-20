export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users,
});

export const getUsersFAILURE = () => ({
  type: "GET_USER_FAILURE",
});

// GET USER
export const getUserStart = () => ({
  type: "GET_USER_START",
});

export const getUserSuccess = (user) => ({
  type: "GET_USER_SUCCESS",
  payload: user,
});

export const getUserFAILURE = () => ({
  type: "GET_USERS_FAILURE",
});

//DELETE
export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
  type: "DELETE_USER_SUCCESS",
  payload: id,
});

export const deleteUserFAILURE = () => ({
  type: "DELETE_USER_FAILURE",
});

//UPLOAD
export const uploadUserStart = () => ({
  type: "UPLOAD_USER_START",
});

export const uploadUserSuccess = (user) => ({
  type: "UPLOAD_USER_SUCCESS",
  payload: user,
});

export const uploadUserFAILURE = () => ({
  type: "UPLOAD_USER_FAILURE",
});
