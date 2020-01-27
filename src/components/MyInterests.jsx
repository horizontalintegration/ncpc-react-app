import React from 'react';

import { sortBy } from 'lodash';

import MyInterestsService from '../shared/mock-myinterests-service';

import { Checkbox } from '../elements';

class MyInterests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: [],
      webServiceUrl: props.webServiceUrl
    };

    this.myInterestsService = new MyInterestsService(this.state.webServiceUrl);
  }

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
              <Checkbox attributes={interest} key={interest.id} />
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

export default MyInterests;
