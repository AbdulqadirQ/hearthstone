import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import searchReducer from "./searchReducer";

export default combineReducers({ cards: cardReducer, term: searchReducer });
