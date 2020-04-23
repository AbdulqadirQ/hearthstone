import React from "react";
import { connect } from "react-redux";

import { fetchCards, fetchMetaData } from "../actions";
import CardList from "./cards/CardList";
import CardSearch from "./cards/CardSearch";
import CardFilter from "./cards/CardFilter";
import appStyle from "./App.css";

class App extends React.Component {
    componentDidMount() {
        this.props.fetchCards();
        this.props.fetchMetaData();
    }

    render() {
        return (
            <div className="background">
                <div className="ui container">
                    <CardSearch />
                    <CardFilter />
                    <CardList />
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchCards, fetchMetaData })(App);
