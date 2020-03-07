import { stonksReducer } from "./stonksReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  stonksState: stonksReducer
});
