import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      disabled: attributes.disabled,
      helpId: attributes.id + '_help',
      helpText: null,
      id: attributes.id,
      label: attributes.label,
      placeholder: attributes.placeholder,
      value: attributes.value
    }
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.state.id}>{this.state.label}</label>
        <input className="form-control" aria-describedby={this.state.id} defaultValue={this.state.value} disabled={this.state.disabled} id={this.state.id} placeholder={this.state.placeholder} type="email" />
        {this.state.helpText ? <small className="form-text text-muted" id={this.state.helpId}>{this.state.helpText}</small> : ''}
      </div>
    )
  }
}

export default TextInput;
