import React from "react";
import { connect } from "react-redux";

import LoadData from "./cards/LoadData";
import CardList from "./cards/CardList";
import CardSearch from "./cards/CardSearch";
import CardFilter from "./cards/CardFilter";
import FilterButton from "./FilterButton";
import appStyle from "./App.css";

class App extends React.Component {
    renderFilter() {
        if (this.props.toggleFilter) {
            return <CardFilter />;
        }
        return null;
    }
    render() {
        return (
            <div className="background">
                <div className="ui container">
                    <div className="ui grid">
                        <div className="fifteen wide column">
                            <CardSearch />
                        </div>
                        <div className="one wide column">
                            <FilterButton />
                        </div>
                    </div>
                    <LoadData />
                    {this.renderFilter()}
                    <CardList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { toggleFilter: state.toggleFilter };
};

export default connect(mapStateToProps)(App);
