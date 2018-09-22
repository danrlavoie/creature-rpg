import React, { Component } from 'react';
import './PartyCreatureList.css';
import CreateBEMHelper from '../bem-helper';
import PartyCreatureBox from './PartyCreatureBox';

const classes = CreateBEMHelper({
  name: 'party-creature-list'
});

class PartyCreatureList extends Component {
  renderCreatures() {
      return(
        this.props.creatures.map((creature) => {
            return <PartyCreatureBox />
        })
      );
  }
  render() {
    return (
      <div {...classes({element: 'list'})}>
        {this.renderCreatures()}
      </div>
    );
  }
}

PartyCreatureList.propTypes = {
    creatures: Array,
}

export default PartyCreatureList;
