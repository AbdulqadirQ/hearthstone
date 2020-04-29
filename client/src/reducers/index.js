import { combineReducers } from "redux";
import { cardsReducer, metadataReducer, cardsetReducer, classTypeReducer, rarityTypeReducer } from "./dataReducer";
import searchReducer from "./searchReducer";
import { classReducer, rarityReducer, gamemodeReducer, setReducer, manaReducer } from "./filterReducer";

export default combineReducers({
    cards: cardsReducer,
    metadata: metadataReducer,
    sets: cardsetReducer,
    classData: classTypeReducer,
    rarityData: rarityTypeReducer,
    selectedSets: setReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
    gamemode: gamemodeReducer,
    mana: manaReducer,
});
