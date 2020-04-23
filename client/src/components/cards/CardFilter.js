import React from "react";
import { connect } from "react-redux";
import { selectedClass, selectedRarity } from "../../actions";
import { classIds } from "./classTypes";
import { rarities } from "./rarityTypes";
import filterStyling from "./CardFilter.css";

class CardFilter extends React.Component {
    updateSelectedClasses(classUpdate) {
        this.props.selectedClass(classUpdate);
    }
    updateSelectedRarities(rarityUpdate) {
        this.props.selectedRarity(rarityUpdate);
    }

    renderClassCheckboxes() {
        const checkboxes = [];
        for (const class_name in classIds) {
            checkboxes.push(
                <div key={classIds[class_name]} className="row">
                    <div className="ui toggle checkbox filterStyling">
                        <input
                            type="checkbox"
                            name={class_name}
                            onChange={(e) => this.updateSelectedClasses({ [class_name]: e.target.checked })}
                        />
                        <label>{class_name}</label>
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
            </div>
        );
    }
}

export default connect(null, { selectedClass, selectedRarity })(CardFilter);
