import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MySubscriptionsService from '../services/mysubscriptions-service';

import AppContext from '../AppContext';
import Collapsible from './Collapsible';

import { Switch } from '../elements';

class MySubscriptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldGroups: []
    };

    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.onClickBadge = (event, props, state) => {
      console.log('onClickBadge()', props, state);
    }
    
    this.onClickSwitch = (event, props, state) => {
      console.log('onClickSwitch()', props, state);
    };

    this.onClickUnsubscribeAll = event => {
      event.preventDefault();

      const $this = $(event.target);

      console.log('onUnsubscribeAll()');

      $this.attr('disabled', true);

      this.wsEndpoint.unsubscribeAll()
        .then(response => {
          $this.attr('disabled', false);
        }
      );
    };
  }

  /*
   * LIFECYCLE METHODS
   */

  componentDidMount() {
    this.wsEndpoint = new MySubscriptionsService(this.context.businessUnit, this.context.id, this.context.wsBaseUrl, this.props.wsEndpoint);

    this.wsEndpoint.get().then(fieldGroups => {
      const sortedfieldGroups = sortBy(fieldGroups, 'catorder');

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
        <Collapsible callbackBadge={this.onClickBadge} callbackSwitch={this.onClickSwitch} id={fieldGroup.catid} isActive={true} key={fieldGroup.catid} label={fieldGroup.catlabel} subscriptions={fieldGroup.subscriptions} />
      )
    });

    return (
      <div>
        {fieldGroups}
        <button className="btn btn-large btn-secondary float-right" onClick={this.onClickUnsubscribeAll}>Unsubscribe All</button>
      </div>
    )
  }
}

MySubscriptions.contextType = AppContext;

export default MySubscriptions;
