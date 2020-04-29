import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
    selectedClass,
    selectedRarity,
    selectedGamemode,
    selectedSet,
    selectedMana,
    selectedHealth,
    selectedAttack,
} from "../../actions";
import { VerticalSlider } from "../Slider";
import filterStyling from "./CardFilter.css";

class CardFilter extends React.Component {
    state = { gamemode_standard: true };
    updateSelectedClasses(classUpdate) {
        this.props.selectedClass(classUpdate);
    }
    updateSelectedRarities(rarityUpdate) {
        this.props.selectedRarity(rarityUpdate);
    }

    updatedSelectedSets(setUpdate) {
        this.props.selectedSet(setUpdate);
    }

    updateSelectedMana = (manaUpdate) => {
        const mana = { max: Math.max(...manaUpdate), min: Math.min(...manaUpdate) };
        this.props.selectedMana(mana);
    };

    updateSelectedHealth = (healthUpdate) => {
        const health = { max: Math.max(...healthUpdate), min: Math.min(...healthUpdate) };
        this.props.selectedHealth(health);
    };

    updateSelectedAttack = (attackUpdate) => {
        const attack = { max: Math.max(...attackUpdate), min: Math.min(...attackUpdate) };
        this.props.selectedAttack(attack);
    };

    renderClassCheckboxes() {
        if (_.isEmpty(this.props.classData)) {
            return null;
        }
        const checkboxes = [];
        for (const class_type of this.props.classData) {
            checkboxes.push(
                <div key={class_type.id} className="row">
                    <div className="ui toggle checkbox filterStyling">
                        <input
                            type="checkbox"
                            name={class_type.name}
                            onChange={(e) => this.updateSelectedClasses({ [class_type.id]: e.target.checked })}
                        />
                        <label>{class_type.name}</label>
                    </div>
                </div>
            );
        }
        return checkboxes;
    }

    renderRarityCheckboxes() {
        if (_.isEmpty(this.props.rarityData)) {
            return null;
        }
        const checkboxes = [];
        for (const rarity_type of this.props.rarityData) {
            checkboxes.push(
                <div key={rarity_type.id} className="row">
                    <div className="ui toggle checkbox filterStyling">
                        <input
                            type="checkbox"
                            name={rarity_type.name}
                            onChange={(e) => this.updateSelectedRarities({ [rarity_type.id]: e.target.checked })}
                        />
                        <label>{rarity_type.name}</label>
                    </div>
                </div>
            );
        }
        return checkboxes;
    }

    onGamemodeChange(gamemode) {
        if (gamemode === "standard") {
            this.setState({ gamemode_standard: true });
        } else {
            this.setState({ gamemode_standard: false });
        }
        this.props.selectedGamemode(gamemode);
    }

    renderGameModeCheckbox() {
        return (
            <div className="row">
                <div className="ui buttons">
                    <button
                        className={this.state.gamemode_standard ? "ui button positive" : "ui button"}
                        onClick={() => this.onGamemodeChange("standard")}
                    >
                        Standard
                    </button>
                    <button
                        className={this.state.gamemode_standard ? "ui button" : "ui button positive"}
                        onClick={() => this.onGamemodeChange("wild")}
                    >
                        Wild
                    </button>
                </div>
            </div>
        );
    }

    renderSetCheckboxes() {
        if (_.isEmpty(this.props.sets)) {
            return null;
        }
        const checkboxes = [];
        for (const set of this.props.sets) {
            checkboxes.push(
                <div key={set.id} className="row">
                    <div className="ui toggle checkbox filterStyling">
                        <input
                            type="checkbox"
                            name={set.name}
                            onChange={(e) => this.updatedSelectedSets({ [set.id]: e.target.checked })}
                        />
                        <label>{set.name}</label>
                    </div>
                </div>
            );
        }
        return checkboxes;
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Class</h3>
                            {this.renderClassCheckboxes()}
                        </div>
                    </div>
                </div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Rarity</h3>
                            {this.renderRarityCheckboxes()}
                        </div>
                    </div>
                    <div className="ui three column grid">
                        <div className="column">
                            <VerticalSlider name="Mana" updateValues={this.updateSelectedMana} />
                        </div>
                        <div className="column">
                            <VerticalSlider name="Health" updateValues={this.updateSelectedHealth} />
                        </div>
                        <div className="column">
                            <VerticalSlider name="Attack" updateValues={this.updateSelectedAttack} />
                        </div>
                    </div>
                </div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Sets</h3>
                            {this.renderSetCheckboxes()}
                        </div>
                    </div>
                </div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">{this.renderGameModeCheckbox()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sets: state.sets,
        classData: state.classData,
        rarityData: state.rarityData,
    };
};

export default connect(mapStateToProps, {
    selectedClass,
    selectedRarity,
    selectedGamemode,
    selectedSet,
    selectedMana,
    selectedHealth,
    selectedAttack,
})(CardFilter);
