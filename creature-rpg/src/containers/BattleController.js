import BattleController from '../components/BattleController';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { selectors } from '../selectors';
import { BATTLE_PHASES } from '../constants';

const mapStateToProps = (state, ownProps) => {
    const participantIDs = selectors.getAllPartyCreatureIDs(state);
    const participants = selectors.getCreatures(state, participantIDs);
    const anyLivingPlayerCreatures = selectors.getAnyLivingPlayerCreatures(state);
    const anyLivingEnemyCreatures = selectors.getAnyLivingEnemyCreatures(state);
    const battleRound = selectors.getCurrentBattleRound(state);
    const battlePhase = selectors.getCurrentBattlePhase(state);
    const activeActorID = selectors.getActiveBattleActorID(state);
    const activeActor = selectors.getCreature(state, activeActorID);
    const availableActions = selectors.getAvailableActions(state, activeActor);
    const speeds = selectors.getCreatureSpeeds(state, participantIDs);
    const livingParticipantIDs = selectors.getAllLivingCreatureIDs(state);
    const actingOrder = participantIDs.slice().sort((a, b) => {
      return speeds[a] < speeds[b];
    });
    return {
      battleRound,
      battlePhase,
      anyLivingPlayerCreatures,
      anyLivingEnemyCreatures,
      participants,
      livingParticipantIDs,
      participantIDs,
      activeActor,
      activeActorID,
      actingOrder,
      availableActions,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      advanceBattlePhase: (phase) => {
        dispatch(actions.advanceBattlePhase(phase));
      },
      endBattle: ({ playerAlive, enemyAlive }) => {
        dispatch(actions.logMessage('Battle is over', 'WARN'));
      },
      setActingOrder: (actingOrder) => {
        dispatch(actions.setActingOrder(actingOrder));
        dispatch(actions.setActiveActor(actingOrder[0]));
      },
      advanceActiveActor: (actingOrder, activeActor) => {
        const i = actingOrder.indexOf(activeActor) + 1;
        if (i >= actingOrder.length) {
          // then we're at the end of the round and should reset
          dispatch(actions.advanceBattlePhase(BATTLE_PHASES.ROUND_OVER));
        }
        else {
          dispatch(actions.setActiveActor(actingOrder[i]))
          dispatch(actions.advanceBattlePhase());
        }
      },
      setActiveAction: ({ activeActor, availableActions }) => {
        console.log(activeActor);
        console.log(availableActions);
      },
      setTarget: ({ activeActor, activeAction, playerParticipants, enemyParticipants }) => {

      },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleController);