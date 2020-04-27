import { combineReducers } from "redux";
import { cardsReducer, metadataReducer, cardsetReducer } from "./dataReducer";
import searchReducer from "./searchReducer";
import { classReducer, rarityReducer, gamemodeReducer, setReducer } from "./filterReducer";

export default combineReducers({
    cards: cardsReducer,
    metadata: metadataReducer,
    sets: cardsetReducer,
    selectedSets: setReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
    gamemode: gamemodeReducer,
});
