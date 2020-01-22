import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <img className="header-logo" src="https://image.s10.sfmc-content.com/lib/fe3215707564077a7c1c71/m/1/7ceedbbc-d950-45e8-997e-d3199e248ac4.png" alt="Salesforce® Logo" />
          <ul className="header-locale list-inline">
            <li className="list-inline-item">English</li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
