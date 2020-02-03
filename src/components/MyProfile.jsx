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
      fieldGroups: [],
      wsException: false
    };
    
    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.onBlurInput = (event, props, state) => {
      console.log('onBlurInput()', props, state);

      const $save = $('#btn-save');

      if (state.value !== props.defaultValue) {
        $save.attr('disabled', true);

        this.wsEndpoint.post(props.mappedField, state.value)
          .then(response => {
            if (response.success === 'fail') {
              $('#exceptionModal').modal();
            } else {
              $save.attr('disabled', false);
            }
          })
          .catch(error => {
            this.setState({ wsException:true });
          });
      }
    }

    this.onChangeMultiSelect = (selections, props, state) => {
      console.log('onChangeMultiSelect()');

      const $save = $('#btn-save');
      
      $save.attr('disabled', true);

      const fieldValue = selections.map(selection => {
        return selection.label
      }).join(';');
      
      this.wsEndpoint.post(props.mappedField, fieldValue)
        .then(response => {
          if (response.success === 'fail') {
            $('#exceptionModal').modal();
          } else {
            $save.attr('disabled', false);
          }
        })
        .catch(error => {
          this.setState({ wsException:true });
        });
    };
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.wsEndpoint = new MyProfileService(this.context.businessUnit, this.context.id, this.context.wsBaseUrl);

    this.wsEndpoint.get()
      .then(fieldGroups => {
        const sortedfieldGroups = sortBy(fieldGroups, 'order');

        this.setState({ fieldGroups:sortedfieldGroups });
      })
      .catch(error => {
        this.setState({ wsException:true });
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
        <div className={"alert alert-danger" + (this.state.wsException ? '' : ' d-none')} role="alert">
          <svg className="bi bi-alert-circle-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.998 3a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z" clipRule="evenodd"/>
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
      case 'Email':
        return <EmailInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} mappedField={attributes.mappedField} placeholder={attributes.placeholder} />;
      case 'Multi-Picklist':
        return <MultiSelect callback={this.onChangeMultiSelect} allowMultiple={attributes.allowMultiple} disabled={attributes.disabled} id={attributes.id} label={attributes.label} mappedField={attributes.mappedField} options={attributes.options} placeholder={attributes.placeholder} value={attributes.value} />;
      case 'Text':
        return <TextInput callback={this.onBlurInput} defaultValue={attributes.value} disabled={attributes.disabled} id={attributes.id} label={attributes.label} mappedField={attributes.mappedField} placeholder={attributes.placeholder} />;
      default:
        return null;
    }
  }
}

MyProfile.contextType = AppContext;

export default MyProfile;
