import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateBEMHelper from './bem-helper';

const classes = CreateBEMHelper({
  name: 'battle-controller'
});

class BattleController extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return (
      <div {...classes({ element: 'controller' })}/>
    );
  }
}

BattleController.propTypes = {
  battleRound: PropTypes.number,
  battlePhase: PropTypes.string,
  playerParticipants: PropTypes.array,
  enemyParticipants: PropTypes.array,
  actingOrder: PropTypes.array,
  activeActor: PropTypes.string,
}
export default BattleController;
