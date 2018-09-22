import React, { Component } from 'react';
import './PartyCreatureBox.css';
import CreateBEMHelper from '../bem-helper';

const classes = CreateBEMHelper({
  name: 'party-creature'
});

class PartyCreatureBox extends Component {
  render() {
    return (
      <div {...classes({element: 'box'})}>
      Creature
      </div>
    );
  }
}

export default PartyCreatureBox;
