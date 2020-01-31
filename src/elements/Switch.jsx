import React from 'react';

import { Badge } from '../components';
class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    }

    this.wsEndpoint;

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState({ checked:!this.state.checked }, () => {
        this.props.callback(event, this.props, this.state);
      });
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const campaigns = this.props.campaigns.map(campaign => {
      return(
        <Badge callback={this.props.callbackBadge} campaignUserId={campaign.campaignUserId} campaignId={campaign.campaignId} checked={campaign.checked} disabled={campaign.disabled} key={campaign.campaignId} label={campaign.label} />
      )
    });

    return (
      <div>
        <div className={"form-switch" + (this.props.disabled ? ' isDisabled' : '') + (this.state.checked ? ' isActive' : '')}>
          <input className="form-switch-input" defaultChecked={this.props.checked} disabled={this.props.disabled} id={this.props.availableSubId} name={this.props.availableSubId} onClick={this.handleClick} type="checkbox" />
          <label className="form-switch-label" htmlFor={this.props.availableSubId}>
            <div className="form-switch-text">
              {this.props.label}
              <p className="form-switch-description">{this.props.description}</p>
            </div>
            <div className={"form-switch-badge badge badge-secondary" + (this.props.channel === 'sms' ? ' text-uppercase' : '')}>{this.props.channel}</div>
            <div className="form-switch-toggle" />
          </label>
        </div>
        <div className={"form-switch-campaigns" + (this.props.disabled ? ' d-none' : '') + (this.props.campaigns.length && this.state.checked ? ' isActive' : '')}>
          {campaigns}
        </div>
      </div>
    )
  }
}

export default Switch;
