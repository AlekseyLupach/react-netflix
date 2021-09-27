//GET RANDOM LIST
export const getRandomListsStart = () => ({
  type: "GET_RANDOM_LISTS_START",
});

export const getRandomListsSuccess = (lists) => ({
  type: "GET_RANDOM_LISTS_SUCCESS",
  payload: lists,
});

export const getRandomListsFailure = () => ({
  type: "GET_RANDOM_LISTS_FAILURE",
});
