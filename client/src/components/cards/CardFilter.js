import React from "react";
import { connect } from "react-redux";
import { selectedClass } from "../../actions";

class CardFilter extends React.Component {
    updatedSelectedClasses(classUpdate) {
        this.props.selectedClass(classUpdate);
    }

    render() {
        return (
            <div>
                <div className="four wide column">
                    <div className="ui form">
                        <div className="inline field">
                            <h3 className="header">Class</h3>
                            <div className="ui toggle checkbox">
                                <input
                                    type="checkbox"
                                    name="mage"
                                    onChange={(e) => this.updatedSelectedClasses({ mage: e.target.checked })}
                                />
                                <label>Mage</label>
                            </div>
                            <div className="ui toggle checkbox">
                                <input
                                    type="checkbox"
                                    name="druid"
                                    onChange={(e) => this.updatedSelectedClasses({ druid: e.target.checked })}
                                />
                                <label>Druid</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectedClass })(CardFilter);
