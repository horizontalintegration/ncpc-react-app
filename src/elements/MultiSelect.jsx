import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import { sortBy } from 'lodash';
import Select from 'react-select'; // SEE: https://github.com/JedWatson/react-select

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      value: props.value
    }

    /*
     * EVENT HANDLERS
     */

    this.onChange = (selections, action) => {
      const fieldName = action.name;
      this.props.callback(fieldName, selections);
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    const sortedOptions = sortBy(this.props.options, 'order');

    const labels = this.props.value.split(';');
    const value = sortedOptions.filter(option => labels.includes(option.label));

    const sortedValue = sortBy(value, 'order');

    sortedOptions.forEach(object => {
      object.key = object.label;
      object.value = object.id;
    });

    sortedValue.forEach(object => {
      object.key = object.label;
      object.value = object.id;
    });

    this.setState({ options:sortedOptions, value:sortedValue });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Select className="form-multiselect" closeMenuOnSelect={false} isMulti={true} isSearchable={true} name={this.props.id} onChange={this.onChange} options={this.state.options} placeholder={this.props.placeholder} value={this.state.value} />
        {this.props.helpText ? <small className="form-text text-muted" id={this.props.id + '_help'}>{this.props.helpText}</small> : ''}
      </div>
    )
  }
}

export default MultiSelect;
