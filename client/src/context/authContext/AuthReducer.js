const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    case "ADD_IN_MY_LIST_START":
      console.log("state:", state);

      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_IN_MY_LIST_SUCCESS":
      console.log("action:", action);
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "ADD_IN_MY_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "DELETE_IN_MY_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_IN_MY_LIST_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "DELETE_IN_MY_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
