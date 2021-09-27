const ListsReducer = (state, action) => {
  switch (action.type) {
    case "GET_RANDOM_LISTS_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_RANDOM_LISTS_SUCCESS":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_RANDOM_LISTS_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ListsReducer;
