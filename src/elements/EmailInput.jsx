import React from 'react';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" aria-describedby={this.props.id} defaultValue={this.props.defaultValue} disabled={this.props.disabled} id={this.props.id} name={this.props.id} placeholder={this.props.placeholder} type="email" />
        {this.props.helpText ? <small className="form-text text-muted" id={this.props.id + '_help'}>{this.props.helpText}</small> : ''}
      </div>
    )
  }
}

export default EmailInput;
