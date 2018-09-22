import Immutable from 'immutable';

const initialState = Immutable.fromJS({

});

const workflow = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
};

export default workflow;