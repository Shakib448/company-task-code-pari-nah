import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import khojReducer from "../slices/khojSlice";

export default combineReducers({
  user: userReducer,
  khoj: khojReducer,
});
