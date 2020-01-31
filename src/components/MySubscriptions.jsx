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

      const $save = $('#btn-save');
      
      $save.attr('disabled', true);

      this.wsEndpoint.postCampaign(props.campaignId, props.campaignUserId, state.checked)
        .then(response => {
          $save.attr('disabled', false);
        }
      );
    }
    
    this.onClickSwitch = (event, props, state) => {
      console.log('onClickSwitch()', props, state);

      const $save = $('#btn-save');
      
      $save.attr('disabled', true);

      this.wsEndpoint.postSubscription(props.availableSubId, props.userSubId, state.checked)
        .then(response => {
          $save.attr('disabled', false);
        }
      );
    };

    this.onClickUnsubscribeAll = event => {
      event.preventDefault();

      console.log('onUnsubscribeAll()');

      const $save = $('#btn-save');
      const $this = $(event.target);

      $save.attr('disabled', true);
      $this.attr('disabled', true);

      this.wsEndpoint.unsubscribeAll()
        .then(response => {
          $save.attr('disabled', false);
          $this.attr('disabled', false);
        }
      );
    };

    /*
    * HELPER METHODS
    */
    
    this.collapsibleIsActive = (order, subscriptions) => {
      const isInactive = (subscription) => subscription.checked !== true;

      // The first category is always open.
      if (order === 0) return true;

      // Additional categorys are closed if they do not contain subscriptions.
      if (subscriptions.length === 0) return false;

      // Additional categories are closed if they contain subscriptions but all are not checked.
      if (subscriptions.every(isInactive)) return false;

      return true;
    }
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
      const isActive = this.collapsibleIsActive(fieldGroup.catorder, fieldGroup.subscriptions);

      return (
        <Collapsible callbackBadge={this.onClickBadge} callbackSwitch={this.onClickSwitch} id={fieldGroup.catid} isActive={isActive} key={fieldGroup.catid} label={fieldGroup.catlabel} order={fieldGroup.catorder} subscriptions={fieldGroup.subscriptions} />
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
