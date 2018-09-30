import BattleController from '../components/BattleController';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { selectors } from '../selectors';

const mapStateToProps = (state, ownProps) => {
    const participantIDs = selectors.getAllPartyCreatureIDs(state);
    const participants = selectors.getCreatures(state, participantIDs);
    const anyLivingPlayerCreatures = selectors.getAnyLivingPlayerCreatures(state);
    const anyLivingEnemyCreatures = selectors.getAnyLivingEnemyCreatures(state);
    const battleRound = selectors.getCurrentBattleRound(state);
    const battlePhase = selectors.getCurrentBattlePhase(state);
    const activeActor = selectors.getActiveBattleActor(state);
    const speeds = selectors.getCreatureSpeeds(state, participantIDs);
    const actingOrder = participantIDs.slice();
    actingOrder.sort((a, b) => {
      return speeds[a] < speeds[b];
    });
    return {
      battleRound,
      battlePhase,
      anyLivingPlayerCreatures,
      anyLivingEnemyCreatures,
      participants,
      participantIDs,
      activeActor,
      actingOrder,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      advanceBattlePhase: () => {
        dispatch(actions.advanceBattlePhase());
      },
      endBattle: ({ playerAlive, enemyAlive }) => {
        dispatch(actions.logMessage('Battle is over', 'WARN'));
      },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleController);