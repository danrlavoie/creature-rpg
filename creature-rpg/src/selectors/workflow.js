const getCurrentBattleRound = (state) => {
  return state.getIn(['workflow', 'battle', 'currentRound']);
};

const getCurrentBattlePhase = (state) => {
  return state.getIn(['workflow', 'battle', 'currentPhase']);
};

const getActiveBattleActor = (state) => {
  return state.getIn(['workflow', 'battle', 'activeActor']);
};

export const selectors = {
  getCurrentBattleRound,
  getCurrentBattlePhase,
  getActiveBattleActor,
};