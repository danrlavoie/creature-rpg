import { actions as skillActions, actionTypes as skillActionTypes } from './skills';

const ATTACK = 'ATTACK';
const DEFEND = 'DEFEND';
export const actions = {
    ATTACK,
    DEFEND,
    ...skillActions,
};

const attackTarget = (args) => ({
    type: ATTACK,
    payload: {
        
    },
});

export const actionTypes = {
    attackTarget,
    ...skillActionTypes,
};