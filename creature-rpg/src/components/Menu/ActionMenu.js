import React, { Component } from 'react';
import './ActionMenu.css';
import CreateBEMHelper from '../bem-helper';
import MenuItem from '../../containers/Menu/MenuItem';

const classes = CreateBEMHelper({
  name: 'action-menu'
});

class ActionMenu extends Component {
  render() {
    return (
      <div {...classes({element: 'menu'})}>
          <MenuItem menuText = "Fight"/>
          <MenuItem menuText = "Items"/>
          <MenuItem menuText = "Flee"/>
          <MenuItem menuText = "Plan"/>
      </div>
    );
  }
}

export default ActionMenu;
