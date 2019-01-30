import Immutable from 'immutable';
import { actionTypes } from '../actions';
import { BATTLE_PHASES } from '../constants';

const initialState = Immutable.fromJS({
  battle: {
    currentRound: 0,
    currentPhase: BATTLE_PHASES.ROUND_OVER,
    activeActor: null,
  }
});

const workflow = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_BATTLE_ROUND:
      return state.setIn(['battle', 'currentRound'], (state.getIn(['battle', 'currentRound']) + 1));
    case actionTypes.ADVANCE_BATTLE_PHASE:
      if (!!action.payload.phase) {
        return state.setIn(['battle', 'currentPhase'], action.payload.phase);
      }
      else {
        switch(state.getIn(['battle', 'currentPhase'])) {
          case BATTLE_PHASES.CHECK_ALIVE:
            return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_ACTION);
          case BATTLE_PHASES.CHOOSE_ACTION:
            return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_TARGET);
          case BATTLE_PHASES.CHOOSE_TARGET:
            return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.EXECUTE_ACTION);
          case BATTLE_PHASES.EXECUTE_ACTION:
            return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHOOSE_NEXT_ACTOR);
          case BATTLE_PHASES.CHOOSE_NEXT_ACTOR:
            return state.setIn(['battle', 'currentPhase'], BATTLE_PHASES.CHECK_ALIVE);
          default: return state;
        }
      }
    case actionTypes.SET_ACTIVE_ACTOR:
      return state.setIn(['battle', 'activeActor'], action.payload.actorID);
    case actionTypes.SET_ACTING_ORDER:
      return state.setIn(['battle', 'actingOrder'], action.payload.creatureIDs);
      case actionTypes.SET_ACTIVE_ACTION:
        return state.setIn(['battle', 'activeAction'], action.payload.actionID);
    default: return state;
  }
};

export default workflow;