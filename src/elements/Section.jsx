import React from 'react';

import { MyInterests, MySubscriptions, MyProfile } from '../components';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    let formBody;

    switch(this.props.id) {
      case 'my-interests':
        formBody = <MyInterests id={this.props.id} />
        break;
      case 'my-subscriptions':
        formBody = <MySubscriptions id={this.props.id} />
        break;
      case 'my-profile':
        formBody = <MyProfile id={this.props.id} />
        break;
      default:
        formBody = <div />
        break;
    }

    return (
      <section>
        <a name={this.props.id} />
        <h2>{this.props.headline}</h2>
        {this.props.description ? <div className="section-description" dangerouslySetInnerHTML={this.renderDescription()} /> : ''}
        {formBody}
      </section>
    )
  }

  renderDescription() {
    return(
      {__html:this.props.description }
    )
  }
}

export default Section;
