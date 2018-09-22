import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BattleMessageBox.css';
import CreateBEMHelper from './bem-helper';

const classes = CreateBEMHelper({
  name: 'battle-message-box'
});

class BattleMessageBox extends Component {
  renderMessages() {
      if(this.props.messages === undefined) return;
      return(this.props.messages.map((message, i) => {
          return <div
          {...classes({element: 'message'})}
          key={i}
          >
            {message}
          </div>;
      }));
  }
  render() {
    return (
      <div
      {
        ...classes({element: 'container'})
      }>
        {this.renderMessages()}
      </div>
    );
  }
}

BattleMessageBox.propTypes = {
    messages: PropTypes.array,
}
export default BattleMessageBox;
