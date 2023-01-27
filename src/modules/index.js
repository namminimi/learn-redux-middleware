import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({counter})//모듈 합치기  counter: counter 줄임

export default rootReducer;