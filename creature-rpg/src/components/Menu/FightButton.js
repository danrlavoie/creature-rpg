import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
import CreateBEMHelper from '../bem-helper';

const classes = CreateBEMHelper({
  name: 'menu-item'
});

class FightButton extends Component {
  render() {
    return (
      <div
      onClick={() => { this.props.clickAction(this.props.participants, this.props.participantIDs) }}
      {
        ...classes({element: 'item'})
      }>
        {this.props.menuText}
      </div>
    );
  }
}

FightButton.propTypes = {
    menuText: PropTypes.string,
    clickAction: PropTypes.func,
    participants: PropTypes.object,
    participantIDs: PropTypes.array,
}
export default FightButton;
