import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards, searchTerm } from "../../actions";

class CardList extends React.Component {
    renderSearchedCards(term) {
        if (_.isEmpty(this.props.cards) || !term || term.length < 3) {
            return null;
        }
        const filtered_list = this.props.cards.filter((card) =>
            card.name.en_US.toLowerCase().includes(term.toLowerCase())
        );

        const card_list = filtered_list.map((card) => (
            <img key={card.id} alt={card.name.en_US} src={card.image.en_US}></img>
        ));
        return card_list;
    }

    render() {
        return <div className="ui small images">{this.renderSearchedCards(this.props.term)}</div>;
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards, term: state.term };
};

export default connect(mapStateToProps, { fetchCards, searchTerm })(CardList);
