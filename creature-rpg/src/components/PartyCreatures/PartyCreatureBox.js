import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PartyCreatureBox.css';
import CreateBEMHelper from '../bem-helper';

const classes = CreateBEMHelper({
  name: 'party-creature'
});

class PartyCreatureBox extends Component {
  render() {
    const hpWidth = this.props.currentHP/this.props.maxHP*100;
    return (
      <div {...classes({element: 'box'})}>
        <div {...classes({element: 'name'})}>{this.props.name}</div>
        <div>{this.props.species}</div>
        <div {...classes({element: 'meter'})}>
          <span style={{width: `${hpWidth}%`}}></span>
        </div>
        <div {...classes({element: 'hp'})}>{this.props.currentHP}/{this.props.maxHP} HP</div>
      </div>
    );
  }
}

PartyCreatureBox.props = {
  name: PropTypes.string,
}

export default PartyCreatureBox;
