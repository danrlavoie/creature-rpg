import Immutable from 'immutable';
import { actionTypes } from '../actions';

const initialState = Immutable.fromJS({
    'game': [],
});

const messageLog = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG: {
            return state.withMutations(state => {
                if(state.getIn(['game']).count() > 15) {
                    state.setIn(['game'], state.getIn(['game']).shift().push(action.payload.message));
                }
                else {
                    state.setIn(['game'], state.getIn(['game']).push(action.payload.message));
                }
            });
        }
        default: return state;
    }
};

export default messageLog;