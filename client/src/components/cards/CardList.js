import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards, searchTerm, selectedClass } from "../../actions";
import { classIds } from "./classTypes";

class CardList extends React.Component {
    buildClassFilteredList(classes) {
        const classes_list = [];
        for (const class_name in classes) {
            if (classes[class_name]) {
                classes_list.push(classIds[class_name]);
            }
        }
        return classes_list;
    }

    filterClasses(classes) {
        if (!_.some(classes)) {
            return [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
        }
        return this.buildClassFilteredList(classes);
    }

    renderSearchedCards(term) {
        if (_.isEmpty(this.props.cards) || !term || term.length < 3) {
            return null;
        }
        const filtered_classes = this.filterClasses(this.props.classes);
        const filtered_list = this.props.cards.filter(
            (card) =>
                card.name.en_US.toLowerCase().includes(term.toLowerCase()) && filtered_classes.includes(card.classId)
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
    return { cards: state.cards, term: state.term, classes: state.classes };
};

export default connect(mapStateToProps, { fetchCards, searchTerm, selectedClass })(CardList);
