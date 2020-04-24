import { endpoint, getAuthToken } from "../api/blizzard";
import {
    FETCH_CARDS,
    FETCH_METADATA,
    LOAD_CARD_SETS,
    SEARCH_TERM,
    SELECTED_CLASS,
    SELECTED_RARITY,
    SELECTED_GAMEMODE,
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
