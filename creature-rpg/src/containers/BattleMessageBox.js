import BattleMessageBox from '../components/BattleMessageBox';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.getIn(['messageLog', 'game']).toJS(),
    };
}

export default connect(mapStateToProps, null)(BattleMessageBox);