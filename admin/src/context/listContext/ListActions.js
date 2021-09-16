export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFAILURE = () => ({
  type: "GET_LISTS_FAILURE",
});

//DELETE
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFAILURE = () => ({
  type: "DELETE_LIST_FAILURE",
});

//CREATE
export const createListStart = () => ({
  type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});

export const createListFAILURE = () => ({
  type: "CREATE_LIST_FAILURE",
});

//UPDATE
export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
});

export const updateListFAILURE = () => ({
  type: "UPDATE_LIST_FAILURE",
});
