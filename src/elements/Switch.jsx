import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    }

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState({ checked:!this.state.checked })
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <div className={"form-switch" + (this.state.checked ? ' isActive' : '')}>
        <input className="form-switch-input" id={this.props.id} type="checkbox" defaultChecked={this.props.checked} onClick={this.handleClick} />
        <label className="form-switch-label" htmlFor={this.props.id}>
          <div className="form-switch-text">
            {this.props.label}
            <p className="form-switch-description">{this.props.description}</p>
          </div>
          <div className="form-switch-badge badge badge-secondary">{this.props.channel}</div>
          <div className="form-switch-toggle" />
        </label>
      </div>
    )
  }
}

export default Switch;
