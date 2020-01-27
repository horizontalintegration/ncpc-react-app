import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      checked: attributes.checked,
      description: attributes.description,
      disabled: attributes.disabled,
      helpId: attributes.id + '_help',
      helpText: null,
      id: attributes.id,
      imageUrl: attributes.imageUrl,
      label: attributes.label
    }

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState(state => ({
        checked: !state.checked
      }))
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    return (
      <div className={"form-check" + (this.state.checked ? ' isActive' : '')}>
        <input className="form-check-input" id={this.state.id} type="checkbox" defaultChecked={this.state.checked} onClick={this.handleClick} />
        <label className="form-check-label" htmlFor={this.state.id}>
          <div className="card mix_checkbox">
            <img src={this.state.imageUrl} className="card-img-top" />
            <div className="card-body">
              <div className="form-check-toggle" />
              {this.state.label}
              <p className="form-check-description">{this.state.description}</p>
            </div>
          </div>
        </label>
      </div>
    )
  }
}

export default Checkbox;
