import BattleController from '../components/BattleController';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { selectors } from '../selectors';

const mapStateToProps = (state, ownProps) => {
    const participantIDs = selectors.getAllPartyCreatureIDs(state);
    const participants = selectors.getCreatures(state, participantIDs);
    const currentRound = selectors.getCurrentBattleRound(state);
    const currentPhase = selectors.getCurrentBattlePhase(state);
    const activeActor = selectors.getActiveBattleActor(state);
    return {
        participants,
        participantIDs,
        currentRound,
        currentPhase,
        activeActor,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleController);