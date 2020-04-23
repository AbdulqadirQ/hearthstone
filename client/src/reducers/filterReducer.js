import { SELECTED_CLASS, SELECTED_RARITY, COUNT_CARDS } from "../actions/types";

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

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNT_CARDS:
            return action.payload;
        default:
            return state;
    }
};
