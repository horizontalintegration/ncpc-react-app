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
    const sortedValue = sortBy(this.props.value, 'order');

    this.setState({ options:sortedOptions, value:sortedValue });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Select className="form-multiselect" closeMenuOnSelect={false} defaultValue={this.state.value} isMulti={this.props.allowMultiple} isSearchable={true} name={this.props.id} onChange={this.onChange} options={this.state.options} placeholder={this.props.placeholder} />
        {this.props.helpText ? <small className="form-text text-muted" id={this.props.id + '_help'}>{this.props.helpText}</small> : ''}
      </div>
    )
  }
}

export default MultiSelect;
