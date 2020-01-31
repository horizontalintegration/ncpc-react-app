import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MyProfileService from '../services/myprofile-service';

import AppContext from '../AppContext';
import { EmailInput, MultiSelect, TextInput } from '../elements';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };
    
    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.onBlurInput = (event, props, state) => {
      console.log('onBlurInput()', props, state);

      if (state.value !== props.defaultValue) {
        this.wsEndpoint.post(props.id, state.value);
      }
    }

    this.onChangeMultiSelect = (fieldName, selections) => {
      console.log('onChangeMultiSelect()');

      const fieldValue = selections.map(selection => {
        return selection.value
      }).join(';');
      
      this.wsEndpoint.post(fieldName, fieldValue);
    };
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.wsEndpoint = new MyProfileService(this.context.businessUnit, this.context.id, this.context.wsBaseUrl, this.props.wsEndpoint);

    this.wsEndpoint.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'order');

      this.setState({ fieldGroups:sortedfieldGroups });
    });
  }

  render() {
    const fieldGroups = this.state.fieldGroups.map(fieldGroup => {
      return (
        <div className="col-lg-6" key={fieldGroup.id}>
          {this.renderControlType(fieldGroup)}
        </div>
      )
    });
    
    return (
      <div>
        <div className="alert alert-light d-none" role="alert">
          <svg className="bi bi-alert-circle" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"/>
            <path d="M9.002 13a1 1 0 112 0 1 1 0 01-2 0zM9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z"/>
          </svg> 
          Unable to retrieve profile information at this time. Please try again later.
        </div>
        <div className="row">
          {fieldGroups}
        </div>
      </div>
    )
  }

  renderControlType(attributes) {
    switch(attributes.controlType) {
      case 'EmailInput':
        return <EmailInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      case 'MultiSelect':
        return <MultiSelect callback={this.onChangeMultiSelect} allowMultiple={attributes.allowMultiple} disabled={attributes.disabled} id={attributes.id} label={attributes.label} options={attributes.options} placeholder={attributes.placeholder} value={attributes.value} />;
      case 'TextInput':
        return <TextInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      default:
        return null;
    }
  }
}

MyProfile.contextType = AppContext;

export default MyProfile;
