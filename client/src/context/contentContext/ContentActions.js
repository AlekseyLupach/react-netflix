//GET RANDOM CONTENT
export const getRandomContentStart = () => ({
  type: "GET_RANDOM_CONTENT_START",
});

export const getRandomContentSuccess = (content) => ({
  type: "GET_RANDOM_CONTENT_SUCCESS",
  payload: content,
});

export const getRandomContentFailure = () => ({
  type: "GET_RANDOM_CONTENT_FAILURE",
});
