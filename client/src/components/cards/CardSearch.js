import React from "react";
import { connect } from "react-redux";

import { searchTerm } from "../../actions";
import searchStyle from "./CardSearch.css";

class CardSearch extends React.Component {
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards, term: state.term };
};

export default connect(mapStateToProps, { searchTerm })(CardSearch);
