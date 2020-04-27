import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCards, searchTerm, selectedClass, selectedRarity, selectedGamemode, selectedSet } from "../../actions";
import { rarities as rarity_types } from "./rarityTypes";

class CardList extends React.Component {
    constructor() {
        super();
        this.cardCount = 0;
    }
    buildClassFilterList(classes) {
        if (!_.some(classes)) {
            return this.props.classData.map((class_type) => class_type.id);
        }
        const classes_list = [];
        for (const class_type in classes) {
            if (classes[class_type]) {
                classes_list.push(Number(class_type));
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

    buildSetFilterList(sets) {
        if (!_.some(sets)) {
            return this.props.sets.map((set) => set.id);
        }
        const set_list = [];
        for (const set in sets) {
            if (sets[set]) {
                set_list.push(Number(set));
            }
        }
        return set_list;
    }

    isStandard(selected_standard, card) {
        if (selected_standard) {
            for (const set of this.props.sets) {
                if (set.standard && card.cardSetId === set.id) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    renderSearchedCards(term) {
        if (this.isZeroCardsToRender()) {
            this.cardCount = 0;
            return null;
        }
        const class_list = this.buildClassFilterList(this.props.classes);
        const rarity_list = this.buildRarityFilterList(this.props.rarities);
        const set_list = this.buildSetFilterList(this.props.selectedSets);
        const selected_standard = this.props.gamemode === "standard" ? true : false;
        const filtered_list = this.props.cards.filter(
            (card) =>
                card.name.en_US.toLowerCase().includes(term.toLowerCase()) &&
                class_list.includes(card.classId) &&
                rarity_list.includes(card.rarityId) &&
                set_list.includes(card.cardSetId) &&
                this.isStandard(selected_standard, card)
        );
        const card_list = filtered_list.map((card) => (
            <img key={card.id} alt={card.name.en_US} src={card.image.en_US}></img>
        ));
        this.cardCount = card_list.length;

        return (
            <div>
                <div>results: {this.cardCount}</div>

                <div className="ui small images">{card_list}</div>
            </div>
        );
    }

    isZeroCardsToRender() {
        return (
            (_.isEmpty(this.props.cards) || !this.props.term || this.props.term.length < 3) &&
            !_.some(this.props.classes) &&
            !_.some(this.props.rarities) &&
            !_.some(this.props.selectedSets)
        );
    }

    render() {
        return this.isZeroCardsToRender() ? (
            <div>results: 0</div>
        ) : (
            <div>{this.renderSearchedCards(this.props.term)}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        sets: state.sets,
        classData: state.classData,
        selectedSets: state.selectedSets,
        term: state.term,
        classes: state.classes,
        rarities: state.rarities,
        gamemode: state.gamemode,
    };
};

export default connect(mapStateToProps, {
    fetchCards,
    searchTerm,
    selectedClass,
    selectedRarity,
    selectedGamemode,
    selectedSet,
})(CardList);
