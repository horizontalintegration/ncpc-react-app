import React from 'react';

import { sortBy } from 'lodash';

import MySubscriptionsService from '../shared/mock-mysubscriptions-service';

import Collapsible from './Collapsible';

class MySubscriptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: [],
      webServiceUrl: props.webServiceUrl
    };

    this.mySubscriptionsService = new MySubscriptionsService(this.state.webServiceUrl);
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.mySubscriptionsService.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'order');

      sortedfieldGroups.forEach(fieldGroup => {
        const sortedSubscriptions = sortBy(fieldGroup.subscriptions, 'order');

        sortedSubscriptions.forEach(subscription => {
          const sortedCampaigns = sortBy(subscription.campaigns, 'order');

          subscription.campaigns = sortedCampaigns;
        });

        fieldGroup.subscriptions = sortedSubscriptions;        
      });

      this.setState({ fieldGroups:sortedfieldGroups });
    })
  }

  render() {

    const fieldGroups = this.state.fieldGroups.map(fieldGroup => {
      return (
        <Collapsible attributes={fieldGroup} key={fieldGroup.id} />
      )
    });

    return (
      <div>
        {fieldGroups}
        <button className="btn btn-large btn-secondary float-right">Unsubscribe All</button>
      </div>
    )
  }
}

export default MySubscriptions;
