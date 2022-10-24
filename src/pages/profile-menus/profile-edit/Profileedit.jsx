import React, { Component } from 'react';
import { render } from 'react-dom';
import { MENU_ITEMS } from './menu-items';
import SideNav from './Side-Nav';

import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      open: true,
      menuItems: MENU_ITEMS
    };

    this.handle.bind(this);
  }

  handle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { menuItems, open, name } = this.state;

    return (
      <>
        <SideNav
          isOpen={open}
          menuList={menuItems}
          toggle={() => this.handle()}
        >
          <h1>Side Nav {name}</h1>
          <p>JavaScript Using Flex Boxes</p>
          <button onClick={() => this.handle()}>Swipe</button>
          <p> {open ? 'true' : 'false'}</p>
        </SideNav>
      </>
    );
  }
}

export default App;