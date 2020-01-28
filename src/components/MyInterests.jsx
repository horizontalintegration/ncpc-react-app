import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MyInterestsService from '../shared/mock-myinterests-service';

import { Checkbox } from '../elements';

class MyInterests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };

    this.myInterestsService = new MyInterestsService(this.props.webServiceUrl);

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
    this.myInterestsService.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'order');

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
            <div className="d-flex align-items-stretch pb-15px pl-15px pr-15px" key={interest.id}>
              <Checkbox checked={interest.checked} description={interest.description} disabled={interest.disabled} id={interest.id} imageUrl={interest.imageUrl} key={interest.id} label={interest.label} />
            </div>
          )
        })
      )
    });

    return (
      <form name={this.state.formName} onChange={this.onChange}>
        <div className="mt-lg-5 row row-cols-1 row-cols-lg-3">
          {fieldGroups}
        </div>
      </form>
    )
  }
}

export default MyInterests;
