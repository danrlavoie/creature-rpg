import { combineReducers } from 'redux';
import workflow from './workflow';
import messageLog from './messageLog';

export default combineReducers({
    workflow,
    messageLog,
});
