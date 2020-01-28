import React from 'react';

import $ from 'jquery';
import { isEqual } from 'lodash';

class Header extends React.Component {
  constructor(props) {
    super(props);

    /*
     * EVENT HANDLERS
     */

    this.onClick = event => {
      event.preventDefault();
  
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <header>
        <div className="container">
          <a href="#top" onClick={this.onClick}><img className="header-logo" src={this.props.logo.url} alt={this.props.logo.label} /></a>
          <ul className="header-locale list-inline">
            <li className="list-inline-item">English</li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
