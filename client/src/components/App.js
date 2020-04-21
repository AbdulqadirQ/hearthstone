import React from "react";
import CardList from "./cards/CardList";
import CardSearch from "./cards/CardSearch";
import appStyle from "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="ui container">
                    <CardSearch />
                    <CardList />
                </div>
            </div>
        );
    }
}

export default App;
