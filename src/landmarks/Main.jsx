import React from 'react';

import { isEqual, sortBy } from 'lodash';

import { Section } from '../elements';
import { Sidebar } from '../landmarks';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banner: '',
      sections: [],
    };
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const sections = this.state.sections.map(section => {
      return (
        <Section description={section.description} headline={section.headline} id={section.id} key={section.id} webServiceUrl={section.webServiceUrl} />
      )
    });

    return (
      <main>
        <form name="">
          <div className="container-fluid">
            <div className="hero">
              <div className="container">
                <h1 className="hero-heading">{this.state.banner}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar sections={this.state.sections} />
              </div>
              <div className="col-lg-9">
                {sections}
              </div>
            </div>
          </div>
        </form>
      </main>
    )
  }

  componentDidUpdate(prevProps) {
    if(!isEqual(this.props.banner, prevProps.banner)) {
      this.setState({ banner:this.props.banner });
    }

    if(!isEqual(this.props.sections, prevProps.sections)) {
      const sorted = sortBy(this.props.sections, 'order');

      this.setState({ sections:sorted });
    }
  }
}

export default Main;
