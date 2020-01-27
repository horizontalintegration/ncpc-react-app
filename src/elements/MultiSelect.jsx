import React from 'react';
import Select from 'react-select'; // SEE: https://github.com/JedWatson/react-select

import { sortBy } from 'lodash';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      allowMultiple: attributes.allowMultiple,
      disabled: attributes.disabled,
      helpId: attributes.id + '_help',
      helpText: null,
      id: attributes.id,
      label: attributes.label,
      options: attributes.options,
      placeholder: attributes.placeholder,
      value: (attributes.value && Array.isArray(attributes.value)) ? attributes.value : []
    }

    /*
     * EVENT HANDLERS
     */

    this.onChange = selectedOptions => {
      console.log(selectedOptions);
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    const sorted = sortBy(this.state.options, 'order');

    this.setState({ options:sorted });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.state.id}>{this.state.label}</label>
        <Select className="form-multiselect" closeMenuOnSelect={false} defaultValue={this.state.value} isMulti={true} isSearchable={true} onChange={this.onChange} options={this.state.options} placeholder={this.state.placeholder} />
        {this.state.helpText ? <small className="form-text text-muted" id={this.state.helpId}>{this.state.helpText}</small> : ''}
      </div>
    )
  }
}

export default MultiSelect;
