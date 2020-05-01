import { combineReducers } from "redux";
import {
    cardsReducer,
    metadataReducer,
    cardsetReducer,
    classTypeReducer,
    rarityTypeReducer,
    cardTypeReducer,
    minionTypeReducer,
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
    selectedMinionReducer,
    toggleFilterReducer,
} from "./filterReducer";

export default combineReducers({
    cards: cardsReducer,
    metadata: metadataReducer,
    sets: cardsetReducer,
    classData: classTypeReducer,
    rarityData: rarityTypeReducer,
    cardTypeData: cardTypeReducer,
    minionData: minionTypeReducer,
    selectedSets: setReducer,
    term: searchReducer,
    classes: classReducer,
    rarities: rarityReducer,
    gamemode: gamemodeReducer,
    mana: manaReducer,
    health: healthReducer,
    attack: attackReducer,
    cardType: selectedCardTypeReducer,
    selectedMinion: selectedMinionReducer,
    toggleFilter: toggleFilterReducer,
});
