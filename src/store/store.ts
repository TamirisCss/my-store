import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

export const store = configureStore({
  middleware: [thunk, logger],
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
