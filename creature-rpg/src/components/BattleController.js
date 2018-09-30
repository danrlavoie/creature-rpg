import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateBEMHelper from './bem-helper';
import { BATTLE_PHASES } from '../constants';

const classes = CreateBEMHelper({
  name: 'battle-controller'
});

class BattleController extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
    if (this.props.anyLivingPlayerCreatures && this.props.anyLivingEnemyCreatures) {
      // If there are living creatures on both sides, continue the battle.
      if(this.props.battleRound > prevProps.battleRound) {
        // Calculate acting order
        
        // Then advance battle phase
        this.props.advanceBattlePhase();
      }
      if (this.props.battlePhase !== prevProps.battlePhase) {
        // The battle phase has changed, so execute an action relevant to the new phase
        console.log(this.props.battlePhase);
        switch(this.props.battlePhase) {
          case BATTLE_PHASES.ROUND_PREP:
            // Do nothing. Give the player a chance to choose an action.
            break;
          case BATTLE_PHASES.CHECK_ALIVE:
            break;
          case BATTLE_PHASES.CHOOSE_ACTION:
            break;
          case BATTLE_PHASES.EXECUTE_ACTION:
            break;
          case BATTLE_PHASES.CHOOSE_NEXT_ACTOR:
            break;
        }
      }
    }
    else {
      // Someone has lost the battle, so end the battle.
      this.props.endBattle({
        playerAlive: this.props.anyLivingPlayerCreatures,
        enemyAlive: this.props.anyLivingEnemyCreatures
      });
    }
  }
  render() {
    return (
      <div {...classes({ element: 'controller' })}/>
    );
  }
}

BattleController.propTypes = {
  battleRound: PropTypes.number,
  battlePhase: PropTypes.string,
  playerParticipants: PropTypes.array,
  enemyParticipants: PropTypes.array,
  anyLivingPlayerCreatures: PropTypes.bool,
  anyLivingEnemyCreatures: PropTypes.bool,
  actingOrder: PropTypes.array,
  activeActor: PropTypes.string,
  advanceBattlePhase: PropTypes.func,
  endBattle: PropTypes.func,
}
export default BattleController;
