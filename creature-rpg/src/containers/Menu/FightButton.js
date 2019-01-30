import FightButton from '../../components/Menu/FightButton';
import { connect } from 'react-redux';
import { actions } from '../../actions';
import { selectors } from '../../selectors';

const mapStateToProps = (state, ownProps) => {
    const participantIDs = selectors.getAllPartyCreatureIDs(state);
    const participants = selectors.getCreatures(state, participantIDs);
    return {
        participants,
        participantIDs,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickAction: (participants, participantIDs) => {
            dispatch(actions.logMessage('Advance to next battle round', 'WARN' ));
            
            dispatch(actions.incrementBattleRound());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FightButton);