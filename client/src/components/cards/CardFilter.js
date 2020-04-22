import React from "react";
import { connect } from "react-redux";
import { selectedClass } from "../../actions";
import filterStyling from "./CardFilter.css";

class CardFilter extends React.Component {
    updateSelectedClasses(classUpdate) {
        this.props.selectedClass(classUpdate);
    }

    render() {
        return (
            <div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Class</h3>
                            <div className="row">
                                <div className="ui toggle checkbox filterStyling">
                                    <input
                                        type="checkbox"
                                        name="mage"
                                        onChange={(e) => this.updateSelectedClasses({ mage: e.target.checked })}
                                    />
                                    <label>Mage</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="ui toggle checkbox filterStyling">
                                    <input
                                        type="checkbox"
                                        name="druid"
                                        onChange={(e) => this.updateSelectedClasses({ druid: e.target.checked })}
                                    />
                                    <label>Druid</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectedClass })(CardFilter);
