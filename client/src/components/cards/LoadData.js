import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchCards, fetchMetaData, loadCardSets } from "../../actions";

class LoadData extends React.Component {
    async componentDidMount() {
        this.props.fetchCards();
        await this.props.fetchMetaData();
        this.buildSetObject();
    }

    buildSetObject() {
        if (_.isEmpty(this.props.metadata)) {
            return null;
        }

        const standard_sets = this.props.metadata.setGroups.find((group) => group.slug === "standard").cardSets;

        const setData = this.props.metadata["sets"].map((set) => ({
            id: set.id,
            name: set.name.en_US,
            releaseDate: set.releaseDate,
            standard: standard_sets.includes(set.slug),
        }));

        console.log("SET DATA", setData);
        this.props.loadCardSets(setData);
    }

    render() {
        return <div></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        metadata: state.metadata,
    };
};

export default connect(mapStateToProps, { fetchCards, fetchMetaData, loadCardSets })(LoadData);
