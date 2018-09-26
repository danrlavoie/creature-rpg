import Immutable from 'immutable';
import { actionTypes } from '../actions';
import { BATTLE_PHASES } from '../constants';

const initialState = Immutable.fromJS({
  battle: {
    currentRound: 0,
    currentPhase: BATTLE_PHASES.ROUND_PREP,
    activeActor: null,
  }
});

const workflow = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_BATTLE_ROUND:
      return state.setIn(['battle', 'currentRound'], (state.getIn(['battle', 'currentRound']) + 1));
    case actionTypes.ADVANCE_BATTLE_PHASE:
      switch(state.getIn(['battle', 'currentPhase'])) {
        case BATTLE_PHASES.ROUND_PREP:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHECK_ALIVE);
        case BATTLE_PHASES.CHECK_ALIVE:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_ACTION);
        case BATTLE_PHASES.CHOOSE_ACTION:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_TARGET);
        case BATTLE_PHASES.CHOOSE_TARGET:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.EXECUTE_ACTION);
        case BATTLE_PHASES.EXECUTE_ACTION:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_NEXT_ACTOR);
        case BATTLE_PHASES.CHOOSE_NEXT_ACTOR:
          return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.ROUND_PREP);
      }
    case actionTypes.SET_ACTIVE_ACTOR:
      return state.setIn(['battle', 'activeActor'], action.payload);
    default: return state;
  }
};

export default workflow;