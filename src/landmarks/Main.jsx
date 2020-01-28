import React from 'react';

import { isEqual, sortBy } from 'lodash';

import { Section } from '../elements';
import { Sidebar } from '../landmarks';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const sections = this.props.sections.map(section => {
      return (
        <Section description={section.description} headline={section.headline} id={section.id} key={section.id} wsEndpoint={section.wsEndpoint} />
      )
    });

    return (
      <main>
        <div className="container-fluid">
          <div className="hero">
            <div className="container">
              <h1 className="hero-heading">{this.props.banner}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar sections={this.props.sections} />
            </div>
            <div className="col-lg-9">
              {sections}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
