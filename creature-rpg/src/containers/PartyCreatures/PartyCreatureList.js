import PartyCreatureList from '../../components/PartyCreatures/PartyCreatureList';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        creatures: ['a', 'b', 'c'],
    };
}

export default connect(mapStateToProps, null)(PartyCreatureList);