import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import CardFilter from "./CardFilter";
import { fetchCards, searchTerm } from "../../actions";
import searchStyle from "./CardSearch.css";

class CardSearch extends React.Component {
    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="sixteen wide column">
                    <div className="ui category search ">
                        <div className="ui icon input search-bar">
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => this.props.searchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <CardFilter />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards, term: state.term };
};

export default connect(mapStateToProps, { fetchCards, searchTerm })(CardSearch);
