import FightButton from '../../components/Menu/FightButton';
import { connect } from 'react-redux';
import { actions } from '../../actions';

const mapStateToProps = (state, ownProps) => {
    const participantIDs = state.getIn(['creature', 'playerParty']).concat(state.getIn(['creature', 'enemyParty'])).toJS();
    const participants = state.getIn(['creature', 'creatures']).filter((v, k) => participantIDs.includes(k)).toJS();
    return {
        participants,
        participantIDs,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickAction: (participants, participantIDs) => {
            dispatch(actions.logMessage('Choose acting order', 'WARN' ));
            const actingOrder = participantIDs.sort((a, b) => {
                return (participants[`${a}`].speed < participants[`${b}`].speed);
            });
            actingOrder.map((actor) => {
                dispatch(actions.logMessage(actor + ' is acting', 'WARN' ));
                return actor;
            });
            console.log(actingOrder);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FightButton);