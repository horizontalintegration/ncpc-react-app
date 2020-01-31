import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MyInterestsService from '../services/myinterests-service';

import AppContext from '../AppContext';
import { Checkbox } from '../elements';

class MyInterests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };

    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.onClickCheckbox = (event, props, state) => {
      console.log('onClickCheckbox()', props, state);

      const $save = $('#btn-save');
      
      $save.attr('disabled', true);

      this.wsEndpoint.post(props.availableIntId, props.userIntId, state.checked)
        .then(response => {
          $save.attr('disabled', false);
        }
      );
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.wsEndpoint = new MyInterestsService(this.context.businessUnit, this.context.id, this.context.wsBaseUrl, this.props.wsEndpoint);

    this.wsEndpoint.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'catorder');

      sortedfieldGroups.forEach(fieldGroup => {
        const sortedInterests = sortBy(fieldGroup.interests, 'order');

        fieldGroup.interests = sortedInterests;
      });

      this.setState({ fieldGroups:sortedfieldGroups });
    })
  }

  render() {
    const fieldGroups = this.state.fieldGroups.map(fieldGroup => {
      return (
        fieldGroup.interests.map(interest => {
          return (
            <div className="d-flex align-items-stretch pb-15px pl-15px pr-15px" key={interest.availableIntId}>
              <Checkbox availableIntId={interest.availableIntId} callback={this.onClickCheckbox} checked={interest.checked} description={interest.description} disabled={interest.disabled} imageUrl={interest.url} key={interest.availableIntId} label={interest.label} userIntId={interest.userIntId} />
            </div>
          )
        })
      )
    });

    return (
      <div>
        <div className="mt-lg-5 row row-cols-1 row-cols-lg-3">
          {fieldGroups}
        </div>
      </div>
    )
  }
}

MyInterests.contextType = AppContext;

export default MyInterests;
