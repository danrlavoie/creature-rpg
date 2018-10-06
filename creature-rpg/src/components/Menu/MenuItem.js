import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
import CreateBEMHelper from '../bem-helper';

const classes = CreateBEMHelper({
  name: 'menu-item'
});

class MenuItem extends Component {
  render() {
    return (
      <div
      onClick={() => { this.props.clickAction(this.props.menuText) }}
      {
        ...classes({element: 'item'})
      }>
        {this.props.menuText}
      </div>
    );
  }
}

MenuItem.propTypes = {
    menuText: PropTypes.string,
    clickAction: PropTypes.func,
}
export default MenuItem;
