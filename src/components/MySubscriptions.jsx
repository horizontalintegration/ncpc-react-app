import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MySubscriptionsService from '../shared/mock-mysubscriptions-service';

import Collapsible from './Collapsible';

class MySubscriptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };

    this.mySubscriptionsService = new MySubscriptionsService(this.props.webServiceUrl);

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
        <Collapsible id={fieldGroup.id} isActive={fieldGroup.isActive} key={fieldGroup.id} label={fieldGroup.label} subscriptions={fieldGroup.subscriptions} />
      )
    });

    return (
      <form name={this.state.formName} onChange={this.onChange}>
        {fieldGroups}
        <button className="btn btn-large btn-secondary float-right">Unsubscribe All</button>
      </form>
    )
  }
}

export default MySubscriptions;
