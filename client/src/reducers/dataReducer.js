import { FETCH_CARDS, FETCH_METADATA } from "../actions/types";

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
