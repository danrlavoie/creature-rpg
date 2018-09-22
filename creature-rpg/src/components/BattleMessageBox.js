import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BattleMessageBox.css';
import CreateBEMHelper from './bem-helper';

const classes = CreateBEMHelper({
  name: 'battle-message-box'
});

class BattleMessageBox extends Component {
  render() {
    return (
      <div
      {
        ...classes({element: 'container'})
      }>
        Battle message box
      </div>
    );
  }
}

BattleMessageBox.propTypes = {
    menuText: PropTypes.string,
}
export default BattleMessageBox;
