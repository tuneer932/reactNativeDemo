import * as actionTypes from '../actions/actionTypes';
import updateState from '../../utils/updateState';

const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionTypes.SET_ITEMS:
            return updateState(state, { items: payload });

        default:
            return state;
    }
};
