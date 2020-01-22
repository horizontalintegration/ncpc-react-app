import React from 'react';

// SEE: https://github.com/srigar/multiselect-react-dropdown
import { Multiselect as MultiselectReact} from 'multiselect-react-dropdown';

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
      value: attributes.value
    }
  }

  render() {
    const options = this.state.options.map((option) =>
      <option key={option.id} value={option.value}>{option.label}</option>
    );

    return (
      <div className="form-group">
        <label htmlFor={this.state.id}>{this.state.label}</label>
        <MultiselectReact displayValue="label" onRemove={this.onRemove} onSelect={this.onSelect} options={this.state.options} placeholder={this.state.placeholder} showCheckbox={true} />
        {this.state.helpText ? <small className="form-text text-muted" id={this.state.helpId}>{this.state.helpText}</small> : ''}
      </div>
    )
  }

  onSelect(optionsList, selectedItem) {
    return false;
    // console.log(optionsList, selectedItem);
  }

  onRemove(optionList, removedItem) {
    // console.log(optionList, removedItem);
  }
}

export default MultiSelect;
