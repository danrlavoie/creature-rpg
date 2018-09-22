import MenuItem from '../../components/Menu/MenuItem';
import { connect } from 'react-redux';
import { actions } from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickAction: dispatch(actions.logMessage({ message: ownProps.menuText, logLevel: 'WARN' })),
    };
}

export default connect(null, mapDispatchToProps)(MenuItem);