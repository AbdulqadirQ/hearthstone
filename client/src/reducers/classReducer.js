import { SELECTED_CLASS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case SELECTED_CLASS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
