import axios from "axios";

export const endpoint = axios.create({
    baseURL: "https://eu.api.blizzard.com/hearthstone",
});

export const getAuthToken = async () => {
    const response = await axios.get("https://eu.battle.net/oauth/token", {
        params: {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            grant_type: "client_credentials",
        },
    });
    return response.data.access_token;
};
