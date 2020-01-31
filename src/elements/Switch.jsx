import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    }

    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState({ checked:!this.state.checked }, () => {
        this.props.callback(event, this.props, this.state);
      });
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <div className={"form-switch mb-3" + (this.state.checked ? ' isActive' : '')}>
        <input className="form-switch-input" defaultChecked={this.props.checked} id={this.props.availableSubId} name={this.props.availableSubId} onClick={this.handleClick} type="checkbox" />
        <label className="form-switch-label" htmlFor={this.props.availableSubId}>
          <div className="form-switch-text">
            {this.props.label}
            <p className="form-switch-description">{this.props.description}</p>
          </div>
          <div className={"form-switch-badge badge badge-secondary" + (this.props.channel === 'sms' ? ' text-uppercase' : '')}>{this.props.channel}</div>
          <div className="form-switch-toggle" />
        </label>
      </div>
    )
  }
}

export default Switch;
