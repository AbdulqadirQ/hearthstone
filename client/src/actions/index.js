import { endpoint, getAuthToken } from "../api/blizzard";
import { FETCH_CARDS } from "./types";

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
        console.log(response);
        cardList = [...cardList, ...response.data.cards];
    }

    dispatch({ type: FETCH_CARDS, payload: cardList });
};
