import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards } from "../../actions";

class CardList extends React.Component {
    componentDidMount() {
        // this.props.fetchCards();
    }

    renderCards() {
        console.log("CARDS: ", this.props.cards);
        if (_.isEmpty(this.props.cards)) {
            return null;
        }
        const card_list = this.props.cards.map((card) => (
            <img key={card.id} alt={card.name.en_US} src={card.image.en_US}></img>
        ));
        return card_list;
    }

    render() {
        return <div className="ui small images">{this.renderCards()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards };
};

export default connect(mapStateToProps, { fetchCards })(CardList);
