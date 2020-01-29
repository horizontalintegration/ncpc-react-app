import React from 'react';

import $ from 'jquery';
import { sortBy } from 'lodash';

import MySubscriptionsService from '../shared/mock-mysubscriptions-service';

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

    // this.timer;

    /*
     * EVENT HANDLERS
     */

    // this.onChange = event => {
    //   const $this = $(event.target);
      
    //   console.log('onChange()', event, $this);

    //   clearTimeout(this.timer);
    //   this.timer = setTimeout(this.onTimeout, 1000, $this);
    // }

    // this.onTimeout = $elem => {
    //   const fieldName = $elem.attr('name');
    //   const fieldValue = $elem.prop('checked');

    //   console.log('onTimeout()', $elem);

    //   this.wsEndpoint.post(fieldName, fieldValue);
    // }

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
      return (
        <Collapsible id={fieldGroup.catid} isActive={true} key={fieldGroup.catid} label={fieldGroup.catlabel} subscriptions={fieldGroup.subscriptions} />
      )
    });

    return (
      <form name={this.state.formName}>
        {fieldGroups}
        <button className="btn btn-large btn-secondary float-right" onClick={this.onClickUnsubscribeAll}>Unsubscribe All</button>
      </form>
    )
  }

  renderSwitches(subscriptions) {
    subscriptions.map(subscription => {
      return(
        <Switch channel={subscription.channel} checked={subscription.checked} description={subscription.description} id={subscription.id} key={subscription.id} label={subscription.label} />
      )
    })
  }

}

MySubscriptions.contextType = AppContext;

export default MySubscriptions;
