import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import callApiReducer from "./callApiReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  callApiReducer,
  cartReducer,
});

export default rootReducer;
