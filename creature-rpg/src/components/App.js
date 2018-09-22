import React, { Component } from 'react';
import './App.css';
import ActionMenu from './Menu/ActionMenu';
import CreateBEMHelper from './bem-helper';
import BattleMessageBox from '../containers/BattleMessageBox';
import PartyCreatureList from '../containers/PartyCreatures/PartyCreatureList';

const classes = CreateBEMHelper({
  name: 'app'
});

class App extends Component {
  render() {
    return (
      <div {...classes({ element: 'app' })}>
        <div {...classes({ element: 'party-row'})}>
          <PartyCreatureList />
        </div>
        <div {...classes({ element: 'enemy-row'})}>
        </div>
        <div {...classes({ element: 'io-row'})}>
          <ActionMenu/>
          <BattleMessageBox/>
        </div>
      </div>
    );
  }
}

export default App;
