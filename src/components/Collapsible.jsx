import React from 'react';

import { Switch } from '../elements';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    const { attributes } = props;

    this.state = {
      isActive: attributes.isActive,
      isActiveOnLoad: attributes.isActive,
      id: attributes.id,
      label: attributes.label,
      subscriptions: attributes.subscriptions
    }

    /*
     * EVENT HANDLERS
     */

    this.handleClick = event => {
      this.setState(state => ({
        isActive: !state.isActive
      }))
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const fieldGroups = this.state.subscriptions.map(subscription => {
      return(
        <Switch attributes={subscription} key={subscription.id} />
      )
    });

    return (
      <div className={"collapsible" + (this.state.isActive ? ' isActive' : '')}>
        <h3 className="collapsible-headline" aria-expanded={this.state.isActive} aria-controls={this.state.id} data-toggle="collapse" data-target={"#" + this.state.id} onClick={this.handleClick}>
          {this.state.label} <i className="fas fa-chevron-down"></i>
        </h3>
        <div className={"collapse" + (this.state.isActiveOnLoad ? ' show' : '')} id={this.state.id}>
          {fieldGroups}
        </div>
      </div>
    )
  }
}

export default Collapsible;
