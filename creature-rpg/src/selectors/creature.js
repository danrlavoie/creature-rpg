
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

const getPlayerPartyCreatures = (state) => {
  return getCreatures(state, getPlayerPartyCreatureIDs(state));
};

const getEnemyPartyCreatures = (state) => {
  return getCreatures(state, getPlayerPartyCreatureIDs(state));
};

const getAllPartyCreatures = (state) => {
  return getCreatures(state, getAllPartyCreatureIDs(state));
};

const getAnyLivingPlayerCreatures = (state) => {
  return Object.values(getPlayerPartyCreatures(state)).reduce((bool, v) => {
    if (v.currentHP > 0) {
      return true;
    }
    return bool;
  }, false);
};

const getAnyLivingEnemyCreatures = (state) => {
  return Object.values(getEnemyPartyCreatures(state)).reduce((bool, v) => {
    if (v.currentHP > 0) {
      return true;
    }
    return bool;
  }, false);
};

const getAllLivingCreatures = (state) => {
  return getAllPartyCreatureIDs(state).map((creatureID) => {
    if (state.getIn(['creature', 'creatures', creatureID, 'currentHP']) > 0) {
      return { [creatureID]: state.getIn(['creature', 'creatures', creatureID]).toJS() };
    }
    return;
  });
};

const getAllLivingCreatureIDs = (state) => {
  return getAllLivingCreatures(state).map((creature) => {
    return Object.keys(creature)[0];
  });
};

const getCreature = (state, creatureID) => {
  return !!state.getIn(['creature', 'creatures', creatureID]) ?
    state.getIn(['creature', 'creatures', creatureID]).toJS() :
    {};
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
  getPlayerPartyCreatures,
  getEnemyPartyCreatures,
  getAllPartyCreatures,
  getAnyLivingPlayerCreatures,
  getAnyLivingEnemyCreatures,
  getAllLivingCreatures,
  getAllLivingCreatureIDs,
  getCreatures,
  getCreature,
  getCreatureSpeeds,
};