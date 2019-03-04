import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  NavigationReducer
});

export default AppReducer;
