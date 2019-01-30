import Immutable from 'immutable';
import { TARGET_CLASSES, ACTION_CLASSES, ATTRIBUTES } from '../constants';

const initialState = Immutable.fromJS({
    effects: {
      attack: {
        healthDamage: {
          min: 0,
          max: 10,
          boostAttr: ATTRIBUTES.ATK,
          resistAttr: ATTRIBUTES.DEF,
        },
      },
      defend: {
        increaseAttributeRestOfRound: {
          min: 0,
          max: 10,
          attribute: ATTRIBUTES.DEF,
        },
      },
      skills: {
        heal: {
          healthRestore: {
            min: 0,
            max: 10,
          },
        },
      },
    },
    targets: {
      attack: TARGET_CLASSES.SINGLE_OPPONENT,
      defend: TARGET_CLASSES.SELF,
      skills: {
        heal: TARGET_CLASSES.SINGLE_FRIENDLY,
      },
    },
    actionClasses: {
      attack: ACTION_CLASSES.OFFENSIVE,
      defend: ACTION_CLASSES.DEFENSIVE,
      skills: {
        heal: ACTION_CLASSES.HEALING,
      },
    },
});

const combat = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
};

export default combat;