import React from "react";

import LoadData from "./cards/LoadData";
import CardList from "./cards/CardList";
import CardSearch from "./cards/CardSearch";
import CardFilter from "./cards/CardFilter";
import appStyle from "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="ui container">
                    <LoadData />
                    <CardSearch />
                    <CardFilter />
                    <CardList />
                </div>
            </div>
        );
    }
}

export default App;
