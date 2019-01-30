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

const getActiveAction = (state) => {
  const activeAction = state.getIn(['workflow', 'battle', 'activeAction']);
  if (activeAction === 'attack' || activeAction === 'defend') {
    return {
      [activeAction]: {
        actionClass: state.getIn(['combat', 'actionClasses', activeAction]),
        targets: state.getIn(['combat', 'targets', activeAction]),
        effects: state.getIn(['combat', 'effects', activeAction]),    
      }
    };
  }
  const action = state.getIn(['combat', 'actionClasses', 'skills', action ]);
  return {
    [activeAction]: {
      actionClass: state.getIn(['combat', 'actionClasses', 'skills', activeAction]),
      targets: state.getIn(['combat', 'targets', 'skills', activeAction]),
      effects: state.getIn(['combat', 'effects', 'skills', activeAction]),    
    }
  }
}


export const selectors = {
  getAvailableActions,
  getActiveAction,
};
