import React from 'react';

import { sortBy } from 'lodash';

import MyProfileService from '../shared/mock-myprofile-service';

import { EmailInput, MultiSelect, TextInput } from '../elements';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: [],
      webServiceUrl: props.webServiceUrl
    };

    this.myProfileService = new MyProfileService(this.state.webServiceUrl);
  }

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
      <div>
        <div className="row">
          {fieldGroups}
        </div>
      </div>
    )
  }

  renderControlType(attributes) {
    switch(attributes.controlType) {
      case 'EmailInput':
        return <EmailInput attributes={attributes} />;
      case 'MultiSelect':
        return <MultiSelect attributes={attributes} />;
      case 'TextInput':
        return <TextInput attributes={attributes}  />;
      default:
        return null;
    }
  }
}

export default MyProfile;
