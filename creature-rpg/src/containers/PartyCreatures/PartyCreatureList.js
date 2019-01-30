import PartyCreatureList from '../../components/PartyCreatures/PartyCreatureList';
import { connect } from 'react-redux';
import { selectors } from '../../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    creatures: Object.values(selectors.getPlayerPartyCreatures(state)),
  };
}

export default connect(mapStateToProps, null)(PartyCreatureList);