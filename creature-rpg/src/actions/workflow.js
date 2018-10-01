
const INCREMENT_BATTLE_ROUND = 'INCREMENT BATTLE ROUND';
const ADVANCE_BATTLE_PHASE = 'ADVANCE BATTLE PHASE';
const SET_ACTIVE_ACTOR = 'SET ACTIVE ACTOR';
const SET_ACTING_ORDER = 'SET ACTING ORDER';

export const actionTypes = {
    INCREMENT_BATTLE_ROUND,
    ADVANCE_BATTLE_PHASE,
    SET_ACTIVE_ACTOR,
    SET_ACTING_ORDER,
};

const incrementBattleRound = () => {
  return {
      type: INCREMENT_BATTLE_ROUND,
  };
};

const advanceBattlePhase = (phase) => {
  return {
      type: ADVANCE_BATTLE_PHASE,
      payload: { 
        phase,
      },
  };
};

const setActiveActor = (creatureID) => {
  return {
      type: SET_ACTIVE_ACTOR,
      payload: {
        actorID: creatureID,
      },
  };
};

const setActingOrder = (actingOrder) => {
  return {
    type: SET_ACTING_ORDER,
    payload: {
      creatureIDs: actingOrder,
    },
  };
};

export const actions = {
    incrementBattleRound,
    advanceBattlePhase,
    setActiveActor,
    setActingOrder,
};
