import { SELECTED_CLASS, SELECTED_RARITY, SELECTED_GAMEMODE } from "../actions/types";

export const classReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_CLASS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const rarityReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_RARITY:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const gamemodeReducer = (state = "standard", action) => {
    switch (action.type) {
        case SELECTED_GAMEMODE:
            return action.payload;
        default:
            return state;
    }
};
