import PartyCreatureList from '../../components/PartyCreatures/PartyCreatureList';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        creatures: state.getIn(['creature', 'playerParty']).toJS(),
    };
}

export default connect(mapStateToProps, null)(PartyCreatureList);