// store.jsx

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";
import UserReducer from "./Reducers/UserReducer";
import LogReducer from "./Reducers/LogReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducerWithAdditionalReducers = combineReducers({
  root: rootReducer,
  user: UserReducer,
  log: LogReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducerWithAdditionalReducers
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
