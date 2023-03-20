import { combineReducers } from "redux";
import dogImageReducer from "./dogImageReducer";
import loginReducer from "./loginReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  dogImageReducer,
  loginReducer,
  detailReducer,
});

export default rootReducer;
