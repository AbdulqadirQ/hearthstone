import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import searchReducer from "./searchReducer";
import { classReducer, rarityReducer } from "./filterReducer";

export default combineReducers({
    cards: cardReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
});
