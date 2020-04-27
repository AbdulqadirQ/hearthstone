import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchCards, fetchMetaData, loadCardSets, loadClassTypes } from "../../actions";

class LoadData extends React.Component {
    async componentDidMount() {
        this.props.fetchCards();
        await this.props.fetchMetaData();
        this.buildSetObject();
        this.buildClassObject();
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

    buildClassObject() {
        if (_.isEmpty(this.props.metadata)) {
            return null;
        }

        const classData = this.props.metadata["classes"].map((class_type) => ({
            id: class_type.id,
            name: class_type.name.en_US,
        }));

        console.log("CLASS DATA", classData);
        this.props.loadClassTypes(classData);
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

export default connect(mapStateToProps, { fetchCards, fetchMetaData, loadCardSets, loadClassTypes })(LoadData);
