import React, { Component } from 'react';
import './ActionMenu.scss';
import CreateBEMHelper from '../bem-helper';
import MenuItem from '../../containers/Menu/MenuItem';
import FightButton from '../../containers/Menu/FightButton';

const classes = CreateBEMHelper({
  name: 'action-menu'
});

class ActionMenu extends Component {
  render() {
    return (
      <div {...classes({element: 'menu'})}>
          <FightButton menuText = "Fight"/>
          <MenuItem menuText = "Items"/>
          <MenuItem menuText = "Flee"/>
          <MenuItem menuText = "Plan"/>
      </div>
    );
  }
}

export default ActionMenu;
