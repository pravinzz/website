import React from 'react';

import './Nav.scss';

export default class Nav extends React.Component {
  static cls = [
    'a',
    'b',
    'c',
    'd',
    'e'
  ];

  render() {
    const { active, getTabs } = this.props;

    return (
      <div
        className={ `nav-container ${active ? this.constructor.cls[active] : ''}` }
      >
        { this.props.getTabs() }
      </div>
    );
  }
};
