import React from 'react';

import { MyInterests, MySubscriptions, MyProfile } from '../components';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchor: props.id,
      description: props.description,
      headline: props.headline,
      id: props.id,
      webServiceUrl: props.webServiceUrl
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    let formBody;

    switch(this.state.id) {
      case 'my-interests':
        formBody = <MyInterests webServiceUrl={this.state.webServiceUrl} />
        break;
      case 'my-subscriptions':
        formBody = <MySubscriptions webServiceUrl={this.state.webServiceUrl} />
        break;
      case 'my-profile':
        formBody = <MyProfile webServiceUrl={this.state.webServiceUrl} />
        break;
      default:
        formBody = <div />
        break;
    }

    return (
      <section>
        <a name={this.state.anchor} />
        <h2>{this.state.headline}</h2>
        {this.state.description ? <p className="section-description">{this.state.description}</p> : ''}
        {formBody}
      </section>
    )
  }
}

export default Section;
