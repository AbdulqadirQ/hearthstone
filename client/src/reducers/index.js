import { combineReducers } from "redux";
import {
    cardsReducer,
    metadataReducer,
    cardsetReducer,
    classTypeReducer,
    rarityTypeReducer,
    cardTypeReducer,
} from "./dataReducer";
import searchReducer from "./searchReducer";
import {
    classReducer,
    rarityReducer,
    gamemodeReducer,
    setReducer,
    manaReducer,
    healthReducer,
    attackReducer,
    selectedCardTypeReducer,
} from "./filterReducer";

export default combineReducers({
    cards: cardsReducer,
    metadata: metadataReducer,
    sets: cardsetReducer,
    classData: classTypeReducer,
    rarityData: rarityTypeReducer,
    cardTypeData: cardTypeReducer,
    selectedSets: setReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
    gamemode: gamemodeReducer,
    mana: manaReducer,
    health: healthReducer,
    attack: attackReducer,
    cardType: selectedCardTypeReducer,
});
