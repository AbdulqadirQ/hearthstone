import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import searchReducer from "./searchReducer";
import classReducer from "./classReducer";

export default combineReducers({ cards: cardReducer, term: searchReducer, classes: classReducer });
