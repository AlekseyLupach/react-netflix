import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import contentReducer from "./contentSlice";
import listsReducer from "./listsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
    lists: listsReducer,
  },
});
