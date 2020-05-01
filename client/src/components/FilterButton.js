import React from "react";
import { connect } from "react-redux";
import { toggleFilter } from "../actions";
import FilterButtonStyle from "./FilterButton.css";

class FilterButton extends React.Component {
    state = { showFilter: false };

    toggleShowFilter = () => {
        if (this.props.toggleFilterState) {
            this.props.toggleFilter(false);
        } else {
            this.props.toggleFilter(true);
        }
    };

    render() {
        return (
            <div className="ui secondary icon buttons">
                <button
                    className="ui button"
                    style={{ marginTop: "1.4vh", marginLeft: "-4vh" }}
                    onClick={this.toggleShowFilter}
                >
                    <i className="large align justify icon"></i>
                    <i className="large align justify icon"></i>
                    <i className="large align justify icon"></i>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { toggleFilterState: state.toggleFilter };
};

export default connect(mapStateToProps, { toggleFilter })(FilterButton);
