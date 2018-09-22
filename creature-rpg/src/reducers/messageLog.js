import Immutable from 'immutable';
import { actionTypes } from '../actions';

const initialState = Immutable.fromJS({

});

const messageLog = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG: {
            return state.setIn(['a'], 'b');
        }
        default: return state;
    }
};

export default messageLog;