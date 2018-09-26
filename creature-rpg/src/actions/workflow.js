
const INCREMENT_BATTLE_ROUND = 'INCREMENT BATTLE ROUND';
const ADVANCE_BATTLE_PHASE = 'ADVANCE BATTLE PHASE';
const SET_ACTIVE_ACTOR = 'SET ACTIVE ACTOR';

export const actionTypes = {
    INCREMENT_BATTLE_ROUND,
    ADVANCE_BATTLE_PHASE,
    SET_ACTIVE_ACTOR,
};

const incrementBattleRound = () => {
  return {
      type: INCREMENT_BATTLE_ROUND,
  };
};

const advanceBattlePhase = () => {
  return {
      type: ADVANCE_BATTLE_PHASE,
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

export const actions = {
    incrementBattleRound,
    advanceBattlePhase,
    setActiveActor,
};
