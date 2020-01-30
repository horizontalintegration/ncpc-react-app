import React from 'react';

import { Badge } from '../components';
import { Switch } from '../elements';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      isActive: props.isActive
    }

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState({ isActive:!this.state.isActive });
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const fieldGroups = this.props.subscriptions.map(subscription => {
      const campaigns = subscription.campaigns.map(campaign => {
        return(
          <Badge callback={this.props.callbackBadge} checked={campaign.checked} disabled={campaign.disabled} id={campaign.id} key={campaign.id} label={campaign.label} />
        )
      });

      return(
        <div className="collapsible-tile" key={subscription.id}>
          <Switch callback={this.props.callbackSwitch} campaigns={subscription.campaigns} channel={subscription.channel} checked={subscription.checked} description={subscription.description} id={subscription.id} label={subscription.label} />
          <div>{campaigns}</div>
        </div>
      )
    });

    return (
      <div className={"collapsible" + (this.state.isActive ? ' isActive' : '')}>
        <h3 className="collapsible-headline" aria-expanded={this.state.isActive} aria-controls={this.props.id} data-toggle="collapse" data-target={"#" + this.props.id} onClick={this.handleClick}>
          {this.props.label} <i className="fas fa-chevron-down"></i>
        </h3>
        <div className={"collapse" + (this.props.isActive ? ' show' : '')} id={this.props.id}>
          {fieldGroups}
        </div>
      </div>
    )
  }
}

export default Collapsible;
