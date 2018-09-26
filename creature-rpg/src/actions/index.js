import { actions as logActions, actionTypes as logActionTypes } from './messageLog';
import { actions as workflowActions, actionTypes as workflowActionTypes } from './workflow';
export const actions = {
    ...logActions,
    ...workflowActions,
};

export const actionTypes = {
    ...logActionTypes,
    ...workflowActionTypes,
};
