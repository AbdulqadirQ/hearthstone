import React from "react";
import { connect } from "react-redux";
import { selectedClass } from "../../actions";
import { classIds } from "./classTypes";
import filterStyling from "./CardFilter.css";

class CardFilter extends React.Component {
    updateSelectedClasses(classUpdate) {
        this.props.selectedClass(classUpdate);
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

    render() {
        return (
            <div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Class</h3>
                            {this.renderClassCheckboxes()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectedClass })(CardFilter);
