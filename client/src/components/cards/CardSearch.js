import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards, searchTerm } from "../../actions";

class CardSearch extends React.Component {
    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted massive icon input">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => this.props.searchTerm(e.target.value)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards, term: state.term };
};

export default connect(mapStateToProps, { fetchCards, searchTerm })(CardSearch);
