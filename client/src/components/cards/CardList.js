import React from "react";
import axios from "axios";

import { endpoint } from "../../api/blizzard";

class GamesList extends React.Component {
    state = { cards: [] };

    getAuthToken = async () => {
        const response = await axios.get("https://eu.battle.net/oauth/token", {
            params: {
                client_id: process.env.REACT_APP_CLIENT_ID,
                client_secret: process.env.REACT_APP_CLIENT_SECRET,
                grant_type: "client_credentials",
            },
        });
        return response.data.access_token;
    };

    componentDidMount = async () => {
        const token = await this.getAuthToken();
        const response = await endpoint.get("/cards", {
            headers: { Authorization: `Bearer ${token}` },
        });
        this.setState({ cards: response.data.cards });
    };

    renderCards() {
        const card_list = this.state.cards.map((card) => <div>{card.name.en_US}</div>);
        return card_list;
    }

    render() {
        return <div>{this.renderCards()}</div>;
    }
}

export default GamesList;
