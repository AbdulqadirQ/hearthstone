import {
    SELECTED_CLASS,
    SELECTED_RARITY,
    SELECTED_GAMEMODE,
    SELECTED_SET,
    SELECTED_MANA,
    SELECTED_HEALTH,
    SELECTED_ATTACK,
    SELECTED_CARD_TYPE,
    SELECTED_MINION,
    TOGGLE_FILTER,
} from "../actions/types";

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

export const setReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_SET:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const manaReducer = (state = { min: 0, max: 25 }, action) => {
    switch (action.type) {
        case SELECTED_MANA:
            return action.payload;
        default:
            return state;
    }
};

export const healthReducer = (state = { min: 0, max: 20 }, action) => {
    switch (action.type) {
        case SELECTED_HEALTH:
            return action.payload;
        default:
            return state;
    }
};

export const attackReducer = (state = { min: 0, max: 20 }, action) => {
    switch (action.type) {
        case SELECTED_ATTACK:
            return action.payload;
        default:
            return state;
    }
};

export const selectedCardTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_CARD_TYPE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const selectedMinionReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_MINION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const toggleFilterReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return action.payload;
        default:
            return state;
    }
};
