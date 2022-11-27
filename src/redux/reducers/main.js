import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

export const rootReducer=combineReducers({cartReducer})