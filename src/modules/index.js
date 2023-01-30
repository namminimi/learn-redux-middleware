import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({counter, posts})
//모듈 합치기  counter: counter 줄임

export default rootReducer;