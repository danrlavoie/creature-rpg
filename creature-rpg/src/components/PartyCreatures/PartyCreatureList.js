import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PartyCreatureList.css';
import CreateBEMHelper from '../bem-helper';
import PartyCreatureBox from './PartyCreatureBox';

const classes = CreateBEMHelper({
  name: 'party-creature-list'
});

class PartyCreatureList extends Component {
  renderCreatures() {
      return(
        this.props.creatures.map((creature, i) => {
            return <PartyCreatureBox key={i} />
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
    creatures: PropTypes.array,
}

export default PartyCreatureList;
