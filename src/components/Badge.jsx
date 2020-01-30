import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    }

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState({ checked:!this.state.checked }, () => {
        this.props.callback(event, this.props, this.state);
      });
    }
  }

  render() {
    return(
      <span className="badge badge-campaign badge-pill" onClick={this.handleClick}>
        {this.props.label} 
        <svg className="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M12.646 13.354l-6-6 .708-.708 6 6-.708.708z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M7.354 13.354l6-6-.708-.708-6 6 .708.708z" clipRule="evenodd"/>
        </svg>
      </span>
    )
  }
}

export default Badge;