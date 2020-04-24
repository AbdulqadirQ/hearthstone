import { combineReducers } from "redux";
import { cardsReducer, metadataReducer, cardsetReducer } from "./dataReducer";
import searchReducer from "./searchReducer";
import { classReducer, rarityReducer, gamemodeReducer } from "./filterReducer";

export default combineReducers({
    cards: cardsReducer,
    metadata: metadataReducer,
    sets: cardsetReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
    gamemode: gamemodeReducer,
});
