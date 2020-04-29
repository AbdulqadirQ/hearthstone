import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

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
            return this.props.rarityData.map((rarity) => rarity.id);
        }
        const rarity_list = [];
        for (const rarity in rarities) {
            if (rarities[rarity]) {
                rarity_list.push(Number(rarity));
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

    buildCardTypeList(cardTypes) {
        if (!_.some(cardTypes)) {
            return this.props.cardTypeData.map((cardType) => cardType.id);
        }
        const cardType_list = [];
        for (const cardType in cardTypes) {
            if (cardTypes[cardType]) {
                cardType_list.push(Number(cardType));
            }
        }
        return cardType_list;
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

    isBetweenValues(property, values) {
        if (property >= values.min && property <= values.max) {
            return true;
        }
        return false;
    }

    renderSearchedCards(term) {
        if (this.isZeroCardsToRender()) {
            this.cardCount = 0;
            return null;
        }
        const class_list = this.buildClassFilterList(this.props.classes);
        const rarity_list = this.buildRarityFilterList(this.props.rarities);
        const set_list = this.buildSetFilterList(this.props.selectedSets);
        const cardType_list = this.buildCardTypeList(this.props.cardType);
        const selected_standard = this.props.gamemode === "standard" ? true : false;
        const filtered_list = this.props.cards.filter(
            (card) =>
                card.name.en_US.toLowerCase().includes(term.toLowerCase()) &&
                class_list.includes(card.classId) &&
                rarity_list.includes(card.rarityId) &&
                set_list.includes(card.cardSetId) &&
                cardType_list.includes(card.cardTypeId) &&
                this.isStandard(selected_standard, card) &&
                ("manaCost" in card ? this.isBetweenValues(card.manaCost, this.props.mana) : true) &&
                ("health" in card ? this.isBetweenValues(card.health, this.props.health) : true) &&
                ("durability" in card ? this.isBetweenValues(card.durability, this.props.health) : true) &&
                ("attack" in card ? this.isBetweenValues(card.attack, this.props.attack) : true)
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
            !_.some(this.props.selectedSets) &&
            !_.some(this.props.cardTypes)
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
        rarityData: state.rarityData,
        cardTypeData: state.cardTypeData,
        selectedSets: state.selectedSets,
        term: state.term,
        classes: state.classes,
        rarities: state.rarities,
        gamemode: state.gamemode,
        mana: state.mana,
        health: state.health,
        attack: state.attack,
        cardType: state.cardType,
    };
};

export default connect(mapStateToProps)(CardList);
