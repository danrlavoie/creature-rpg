import { combineReducers } from 'redux-immutable';
import workflow from './workflow';
import messageLog from './messageLog';
import creature from './creature';

export default combineReducers({
    workflow,
    messageLog,
    creature,
});
