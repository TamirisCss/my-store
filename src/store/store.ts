import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export type RootState = ReturnType<typeof store.getState>;

export default store;
