import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    actions: {

    },
});

const combat = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
};

export default combat;