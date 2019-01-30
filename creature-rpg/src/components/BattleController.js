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
    if (this.props.anyLivingPlayerCreatures && this.props.anyLivingEnemyCreatures) {
      // If there are living creatures on both sides, continue the battle.
      if(this.props.battleRound > prevProps.battleRound) {
        // Calculate acting order
        this.props.setActingOrder(this.props.actingOrder);
        // Then advance battle phase
        this.props.advanceBattlePhase(BATTLE_PHASES.CHECK_ALIVE);
      }
      if (this.props.battlePhase !== prevProps.battlePhase) {
        // The battle phase has changed, so execute an action relevant to the new phase
        switch(this.props.battlePhase) {
          case BATTLE_PHASES.CHECK_ALIVE:
            if(this.props.livingParticipantIDs.includes(this.props.activeActorID)) {
              this.props.advanceBattlePhase();
            }
            else {
              this.props.advanceBattlePhase(BATTLE_PHASES.CHOOSE_NEXT_ACTOR);
            }
            break;
          case BATTLE_PHASES.CHOOSE_ACTION:
            this.props.setActiveAction({
              activeActor: this.props.activeActor,
              availableActions: this.props.availableActions,
            });
            this.props.advanceBattlePhase();
            break;
          case BATTLE_PHASES.CHOOSE_TARGET:
            this.props.setTarget({
              activeActor: this.props.activeActor,
              activeAction: this.props.activeAction,
              playerParticipants: this.props.playerParticipants,
              enemyParticipants: this.props.enemyParticipants,
            });
            this.props.advanceBattlePhase();
            break;
          case BATTLE_PHASES.EXECUTE_ACTION:
            this.props.advanceBattlePhase();
            break;
          case BATTLE_PHASES.CHOOSE_NEXT_ACTOR:
            this.props.advanceActiveActor(this.props.actingOrder, this.props.activeActorID);
            break;
          default:
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
  participantIDs: PropTypes.array,
  livingParticipantIDs: PropTypes.array,
  anyLivingPlayerCreatures: PropTypes.bool,
  anyLivingEnemyCreatures: PropTypes.bool,
  actingOrder: PropTypes.array,
  activeActor: PropTypes.object,
  activeActorId: PropTypes.string,
  advanceBattlePhase: PropTypes.func,
  endBattle: PropTypes.func,
  setActingOrder: PropTypes.func,
}
export default BattleController;
