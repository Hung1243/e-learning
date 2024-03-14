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

// Combine root reducer with additional reducers
const rootReducerWithAdditionalReducers = combineReducers({
  root: rootReducer,
  user: UserReducer,
  log: LogReducer,
  // Add more reducers if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducerWithAdditionalReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);



// import { configureStore, createStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import rootReducer from "./rootReducer";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
