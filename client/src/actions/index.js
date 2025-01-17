import { endpoint, getAuthToken } from "../api/blizzard";
import {
    FETCH_CARDS,
    FETCH_METADATA,
    LOAD_CARD_SETS,
    LOAD_CLASS_TYPES,
    LOAD_RARITY_TYPES,
    LOAD_CARD_TYPES,
    LOAD_MINION_TYPES,
    SEARCH_TERM,
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
} from "./types";

export const fetchCards = () => async (dispatch) => {
    const token = await getAuthToken();
    var cardList = [];
    for (let i = 1; i <= 6; i++) {
        const response = await endpoint.get("/cards", {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                page: i,
                pageSize: 500,
            },
        });
        cardList = [...cardList, ...response.data.cards];
    }
    console.log("CUMULATIVE CARDS", cardList);
    dispatch({ type: FETCH_CARDS, payload: cardList });
};

export const fetchMetaData = () => async (dispatch) => {
    const token = await getAuthToken();
    const response = await endpoint.get("/metadata", {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log("METADATA: ", response.data);
    dispatch({ type: FETCH_METADATA, payload: response.data });
};

export const loadCardSets = (sets) => {
    return {
        type: LOAD_CARD_SETS,
        payload: sets,
    };
};

export const loadClassTypes = (classes) => {
    return {
        type: LOAD_CLASS_TYPES,
        payload: classes,
    };
};

export const loadRarityTypes = (rarities) => {
    return {
        type: LOAD_RARITY_TYPES,
        payload: rarities,
    };
};

export const loadCardTypes = (card_types) => {
    return {
        type: LOAD_CARD_TYPES,
        payload: card_types,
    };
};

export const loadMinionTypes = (minion_types) => {
    return {
        type: LOAD_MINION_TYPES,
        payload: minion_types,
    };
};

export const searchTerm = (term) => {
    return {
        type: SEARCH_TERM,
        payload: term,
    };
};

export const selectedClass = (classes) => {
    return {
        type: SELECTED_CLASS,
        payload: classes,
    };
};

export const selectedRarity = (rarities) => {
    return {
        type: SELECTED_RARITY,
        payload: rarities,
    };
};

export const selectedGamemode = (gamemode) => {
    return {
        type: SELECTED_GAMEMODE,
        payload: gamemode,
    };
};

export const selectedSet = (selectedSets) => {
    return {
        type: SELECTED_SET,
        payload: selectedSets,
    };
};

export const selectedMana = (mana) => {
    return {
        type: SELECTED_MANA,
        payload: mana,
    };
};

export const selectedHealth = (health) => {
    return {
        type: SELECTED_HEALTH,
        payload: health,
    };
};

export const selectedAttack = (attack) => {
    return {
        type: SELECTED_ATTACK,
        payload: attack,
    };
};

export const selectedCardType = (cardType) => {
    return {
        type: SELECTED_CARD_TYPE,
        payload: cardType,
    };
};

export const selectedMinion = (minion) => {
    return {
        type: SELECTED_MINION,
        payload: minion,
    };
};

export const toggleFilter = (filter) => {
    return {
        type: TOGGLE_FILTER,
        payload: filter,
    };
};
