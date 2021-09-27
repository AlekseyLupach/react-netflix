const ContentReducer = (state, action) => {
  switch (action.type) {
    case "GET_RANDOM_CONTENT_START":
      return {
        content: [],
        isFetching: true,
        error: false,
      };
    case "GET_RANDOM_CONTENT_SUCCESS":
      return {
        content: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_RANDOM_CONTENT_FAILURE":
      return {
        content: [],
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ContentReducer;
