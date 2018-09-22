import { combineReducers } from 'redux-immutable';
import workflow from './workflow';
import messageLog from './messageLog';

export default combineReducers({
    workflow,
    messageLog,
});
