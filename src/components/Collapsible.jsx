import React from 'react';

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
      return(
        <Switch channel={subscription.channel} checked={subscription.checked} description={subscription.description} id={subscription.id} key={subscription.id} label={subscription.label} />
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
