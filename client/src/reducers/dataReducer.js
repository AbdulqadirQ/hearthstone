import { FETCH_CARDS, FETCH_METADATA, LOAD_CARD_SETS, LOAD_CLASS_TYPES, LOAD_RARITY_TYPES } from "../actions/types";

export const cardsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return action.payload;
        default:
            return state;
    }
};

export const metadataReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_METADATA:
            return action.payload;
        default:
            return state;
    }
};

export const cardsetReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_CARD_SETS:
            return action.payload;
        default:
            return state;
    }
};

export const classTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_CLASS_TYPES:
            return action.payload;
        default:
            return state;
    }
};

export const rarityTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_RARITY_TYPES:
            return action.payload;
        default:
            return state;
    }
};
