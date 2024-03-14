// rootReducer.jsx

import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import LogReducer from "./Reducers/LogReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    log: LogReducer,
});

export default rootReducer;
