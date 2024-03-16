// rootReducer.jsx

import { combineReducers } from "@reduxjs/toolkit";
import LogReducer from "./Reducers/LogReducer";
import UserReducer from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  account: UserReducer,
  log: LogReducer,
});

export default rootReducer;
