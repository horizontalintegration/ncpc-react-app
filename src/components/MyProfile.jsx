import React from 'react';

import { EmailInput, MultiSelect, TextInput } from '../elements';

class MyProfile extends React.Component {
  render() {
    const profile = [
      {
        controlType: 'TextInput',
        disabled: false,
        id: 'firstName',
        label: 'First Name',
        mappedField: '',
        order: 0,
        placeholder: 'Enter your first name',
        value: 'Andy',
      },{
        controlType: 'TextInput',
        disabled: false,
        id: 'lastName',
        label: 'Last Name',
        mappedField: '',
        order: 1,
        placeholder: 'Enter your last name',
        value: 'Young',
      },{
        controlType: 'EmailInput',
        disabled: true,
        id: 'email',
        label: 'Email',
        mappedField: '',
        order: 2,
        placeholder: 'Enter your email',
        value: 'a_young@dickenson.com',
      },{
        allowMultiple: true,
        controlType: 'MultiSelect',
        disabled: false,
        id: 'interests',
        label: 'Product Interest',
        mappedField: '',
        order: 3,
        options: [
          {
            id: 'a0Y2E00000c6W0oUAE',
            key: 'Value 1 (Option)',
            label: 'Value 1 (Option)',
            order: 0,
            value: 'a0Y2E00000c6W0oUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0xUAE',
            key: 'Value 2 (Option)',
            label: 'Value 2 (Option)',
            order: 1,
            value: 'a0Y2E00000c6W0xUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0pUAE',
            key: 'Value 3 (Option)',
            label: 'Value 3 (Option)',
            order: 2,
            value: 'a0Y2E00000c6W0pUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0jUAE',
            key: 'Value 4 (Option)',
            label: 'Value 4 (Option)',
            order: 3,
            value: 'a0Y2E00000c6W0jUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0eUAE',
            key: 'Value 5 (Option)',
            label: 'Value 5 (Option)',
            order: 4,
            value: 'a0Y2E00000c6W0eUAE',
            selected: false
          }
        ],
        placeholder: 'Select options',
        value: ''
      }
    ]

    const fieldGroups = profile.map(fieldGroup => {
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
