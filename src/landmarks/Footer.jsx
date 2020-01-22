import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date()
    };
  }

  render() {
    return (
      <footer>
        <div className="container">
          <ul className="footer-nav list-inline">
            <li className="list-inline-item"><a href="https://www.horizontal.com/page/privacy-center">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="https://www.horizontal.com/page/website-terms">Terms of Use</a></li>
          </ul>
          <p className="footer-legal">Horizontal®</p>
          <p className="footer-legal">© {this.state.today.getFullYear()} Horizontal</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
