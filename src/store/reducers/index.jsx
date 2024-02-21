import { combineReducers } from "redux";
import heroList from "./characterListReducer";

export const reducers = combineReducers({
  heroList: heroList,
});
