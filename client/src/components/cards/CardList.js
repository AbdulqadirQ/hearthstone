import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards, fetchMetaData, searchTerm, selectedClass, selectedRarity, countCards } from "../../actions";
import { classIds as class_types } from "./classTypes";
import { rarities as rarity_types } from "./rarityTypes";

class CardList extends React.Component {
    buildClassFilterList(classes) {
        if (!_.some(classes)) {
            return [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
        }
        const classes_list = [];
        for (const class_name in classes) {
            if (classes[class_name]) {
                classes_list.push(class_types[class_name]);
            }
        }
        return classes_list;
    }

    buildRarityFilterList(rarities) {
        if (!_.some(rarities)) {
            return [1, 2, 3, 4, 5];
        }
        const rarity_list = [];
        for (const rarity in rarities) {
            if (rarities[rarity]) {
                rarity_list.push(rarity_types[rarity]);
            }
        }

        return rarity_list;
    }

    renderSearchedCards(term) {
        console.log(this.props.metadata);
        if (
            (_.isEmpty(this.props.cards) || !term || term.length < 3) &&
            !_.some(this.props.classes) &&
            !_.some(this.props.rarities)
        ) {
            this.props.countCards(0);
            return null;
        }
        const class_list = this.buildClassFilterList(this.props.classes);
        const rarity_list = this.buildRarityFilterList(this.props.rarities);
        const filtered_list = this.props.cards.filter(
            (card) =>
                card.name.en_US.toLowerCase().includes(term.toLowerCase()) &&
                class_list.includes(card.classId) &&
                rarity_list.includes(card.rarityId)
        );

        const card_list = filtered_list.map((card) => (
            <img key={card.id} alt={card.name.en_US} src={card.image.en_US}></img>
        ));
        this.props.countCards(card_list.length);
        return card_list;
    }

    render() {
        return (
            <div>
                results: {this.props.count}
                <div className="ui small images">{this.renderSearchedCards(this.props.term)}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        metadata: state.metadata,
        sets: state.sets,
        term: state.term,
        classes: state.classes,
        rarities: state.rarities,
        count: state.count,
    };
};

export default connect(mapStateToProps, {
    fetchCards,
    fetchMetaData,
    searchTerm,
    selectedClass,
    selectedRarity,
    countCards,
})(CardList);
