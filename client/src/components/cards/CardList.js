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
        for (let i = 1; i <= 6; i++) {
            let response = await endpoint.get("/cards", {
                headers: { Authorization: `Bearer ${token}` },
                params: {
                    page: i,
                    pageSize: 500,
                },
            });
            console.log(response);
            this.setState({ cards: [...this.state.cards, ...response.data.cards] });
        }
        console.log(this.state.cards);
    };

    renderCards() {
        const card_list = this.state.cards.map((card) => <img key={card.id} src={card.image.en_US}></img>);
        return card_list;
    }

    render() {
        return <div className="ui small images">{this.renderCards()}</div>;
    }
}

export default GamesList;

/*
TODO:
- there's 2548 cards currently
- (seems like) max 500 cards per page, therefore 6 pages
- not all cards have the same properties. e.g. spell cards don't have 'minionType' metadata
- so, load all cards, match up card properties with 'metadata'
- allow user to select radio buttons: class, minion, spell, mana etc. to filter by

*/
