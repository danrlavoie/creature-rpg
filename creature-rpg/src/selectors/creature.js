
const getAllPartyCreatureIDs = (state) => {
  return state.getIn(['creature', 'playerParty']).concat(state.getIn(['creature', 'enemyParty'])).toJS();
};

const getPlayerPartyCreatureIDs = (state) => {
  return state.getIn(['creature', 'playerParty']).toJS();
};

const getEnemyPartyCreatureIDs = (state) => {
  return state.getIn(['creature', 'enemyParty']).toJS();
};

const getCreatures = (state, creatureIDs) => {
  return state.getIn(['creature', 'creatures']).filter((v, k) => creatureIDs.includes(k)).toJS();
};

const getAllPartyCreatures = (state) => {
  return getCreatures(state, getAllPartyCreatureIDs(state));
};

const getPlayerPartyCreatures = (state) => {
  return getCreatures(state, getPlayerPartyCreatureIDs(state));
};

const getEnemyPartyCreatures = (state) => {
  return getCreatures(state, getPlayerPartyCreatureIDs(state));
};

const getCreature = (state, creatureID) => {
  return state.getIn(['creature', 'creatures', creatureID]).toJS();
};

const getCreatureSpeeds = (state, creatureIDs) => {
  return creatureIDs.reduce((obj, creatureID) => {
    obj[creatureID] = state.getIn(['creature', 'creatures', creatureID, 'speed']);
    return obj;
  }, {});
};

export const selectors = {
  getAllPartyCreatureIDs,
  getPlayerPartyCreatureIDs,
  getEnemyPartyCreatureIDs,
  getAllPartyCreatures,
  getPlayerPartyCreatures,
  getEnemyPartyCreatures,
  getCreatures,
  getCreature,
  getCreatureSpeeds,
};