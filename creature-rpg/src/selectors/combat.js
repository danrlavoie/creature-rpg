const getAvailableActions = (state, creatureID) => {
  const creatureSkills = !!state.getIn(['creature', 'creatures', creatureID, 'skills']) ?
    state.getIn(['creature', 'creatures', creatureID, 'skills']).toJS() :
    [];
  const skills = creatureSkills.reduce((obj, skill) => {
    obj[skill] = {
      actionClass: state.getIn(['combat', 'actionClasses', 'skills', skill]),
      targets: state.getIn(['combat', 'targets', 'skills', skill]),
      effects: state.getIn(['combat', 'effects', 'skills', skill]).toJS(),
    };
    return obj;
  }, {});
  const defaultAbilities = {
    attack: {
      actionClass: state.getIn(['combat', 'actionClasses', 'attack']),
      targets: state.getIn(['combat', 'targets', 'attack']),
      effects: state.getIn(['combat', 'effects', 'attack']).toJS(),
    },
    defend: {
      actionClass: state.getIn(['combat', 'actionClasses', 'defend']),
      targets: state.getIn(['combat', 'targets', 'defend']),
      effects: state.getIn(['combat', 'effects', 'defend']).toJS(),
    },
  }
  return {
    ...defaultAbilities,
    ...skills,
  };
};


export const selectors = {
  getAvailableActions,
};
