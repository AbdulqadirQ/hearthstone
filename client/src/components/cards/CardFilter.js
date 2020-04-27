import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { selectedClass, selectedRarity, selectedGamemode, selectedSet } from "../../actions";
import { rarities } from "./rarityTypes";
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
        const checkboxes = [];
        for (const rarity in rarities) {
            checkboxes.push(
                <div key={rarities[rarity]} className="row">
                    <div className="ui toggle checkbox filterStyling">
                        <input
                            type="checkbox"
                            name={rarity}
                            onChange={(e) => this.updateSelectedRarities({ [rarity]: e.target.checked })}
                        />
                        <label>{rarity}</label>
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
    };
};

export default connect(mapStateToProps, { selectedClass, selectedRarity, selectedGamemode, selectedSet })(CardFilter);
