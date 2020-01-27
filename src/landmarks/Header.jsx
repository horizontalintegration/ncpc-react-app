import React from 'react';

import { isEqual } from 'lodash';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: props.logo
    };
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <header>
        <div className="container">
          <img className="header-logo" src={this.state.logo.url} alt={this.state.logo.label} />
          <ul className="header-locale list-inline">
            <li className="list-inline-item">English</li>
          </ul>
        </div>
      </header>
    )
  }

  componentDidUpdate(prevProps) {
    if(!isEqual(this.props.logo, prevProps.logo)) {
      this.setState({ logo:this.props.logo });
    }
  }
}

export default Header;
