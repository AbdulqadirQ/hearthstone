import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards } from "../../actions";

class CardSearch extends React.Component {
    state = { term: "9999999999" };

    componentDidMount() {
        this.props.fetchCards();
    }

    renderSearchedCards(term) {
        console.log("ENTERING RENDER SEACHED CARDS");
        if (_.isEmpty(this.props.cards)) {
            return null;
        }

        const filtered_list = this.props.cards.filter(function (card) {
            if (card.name.en_US.includes(term)) {
                return card.name.en_US;
            }
        });
        const card_list = filtered_list.map((card) => (
            <img key={card.id} alt={card.name.en_US} src={card.image.en_US}></img>
        ));
        return card_list;
    }

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted massive icon input">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    {this.renderSearchedCards(this.state.term)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards };
};

export default connect(mapStateToProps, { fetchCards })(CardSearch);
