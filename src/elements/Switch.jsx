import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      channel: attributes.channel,
      checked: attributes.checked,
      description: attributes.description,
      id: attributes.id,
      label: attributes.label
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      checked: !state.checked
    }))
  }

  render() {
    return (
      <div className={"form-switch" + (this.state.checked ? ' isActive' : '')}>
        <input className="form-switch-input" id={this.state.id} type="checkbox" defaultChecked={this.state.checked} onClick={this.handleClick} />
        <label className="form-switch-label" htmlFor={this.state.id}>
          <div className="form-switch-text">
            {this.state.label}
            <p className="form-switch-description">{this.state.description}</p>
          </div>
          <div className="form-switch-badge badge badge-secondary">{this.state.channel}</div>
          <div className="form-switch-toggle" />
        </label>
      </div>
    )
  }
}

export default Switch;
