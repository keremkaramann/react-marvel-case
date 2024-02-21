import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { reducers } from "./reducers/";

const middleWares = [thunk, logger];
export const store = createStore(reducers, applyMiddleware(...middleWares));
