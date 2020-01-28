import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MyProfileService from '../shared/mock-myprofile-service';

import { EmailInput, MultiSelect, TextInput } from '../elements';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };

    this.myProfileService = new MyProfileService(this.props.webServiceUrl);

    /*
     * EVENT HANDLERS
     */

    this.onChange = event => {
      const $this = $(event.target);
      
      console.log('onChange()', $this);
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.myProfileService.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'order');

      this.setState({ fieldGroups:sortedfieldGroups });
    })
  }

  render() {
    const fieldGroups = this.state.fieldGroups.map(fieldGroup => {
      return(
        <div className="col-lg-6" key={fieldGroup.id}>
          {this.renderControlType(fieldGroup)}
        </div>
      )
    });

    return (
      <form name={this.props.id} onChange={this.onChange}>
        <div className="row">
          {fieldGroups}
        </div>
      </form>
    )
  }

  renderControlType(attributes) {
    switch(attributes.controlType) {
      case 'EmailInput':
        return <EmailInput defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      case 'MultiSelect':
        return <MultiSelect allowMultiple={attributes.allowMultiple} disabled={attributes.disabled} id={attributes.id} label={attributes.label} options={attributes.options} placeholder={attributes.placeholder} value={attributes.value} />;
      case 'TextInput':
        return <TextInput defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} placeholder={attributes.placeholder} />;
      default:
        return null;
    }
  }
}

export default MyProfile;
