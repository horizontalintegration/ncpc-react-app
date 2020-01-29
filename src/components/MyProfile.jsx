import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MyProfileService from '../shared/mock-myprofile-service';

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
      <form name={this.props.id}>
        <div className="row">
          {fieldGroups}
        </div>
      </form>
    )
  }

  renderControlType(attributes) {
    switch(attributes.controlType) {
      case 'EmailInput':
        return <EmailInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      case 'MultiSelect':
        return <MultiSelect allowMultiple={attributes.allowMultiple} disabled={attributes.disabled} id={attributes.id} label={attributes.label} options={attributes.options} placeholder={attributes.placeholder} value={attributes.value} />;
      case 'TextInput':
        return <TextInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      default:
        return null;
    }
  }
}

MyProfile.contextType = AppContext;

export default MyProfile;
