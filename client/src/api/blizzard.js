import axios from "axios";

export const endpoint = axios.create({
    baseURL: "https://eu.api.blizzard.com/hearthstone",
});
