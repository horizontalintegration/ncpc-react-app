import React from 'react';

import { Section } from '../elements';
import { Sidebar } from '../landmarks';

class Main extends React.Component {
  render() {
    const sections = [
      {
        "description": "When you subscribe to our monthly newsletter, you'll receive news about products, trends and more. Update you newsletter subscription to select the newsletter that best fits you. You can change this at any time.",
        "headline": "My Profile",
        "id": "my-profile",
        "order": 0,
        "webServiceUrl": "????",
      },{
        "description": "",
        "headline": "My Interests",
        "id": "my-interests",
        "order": 1,
        "webServiceUrl": "????",
      },{
        "description": "",
        "headline": "My Subscriptions",
        "id": "my-subscriptions",
        "order": 2,
        "webServiceUrl": "????",
      }
    ];

    return (
      <main>
        <form name="">
          <div className="container-fluid">
            <div className="hero">
              <div className="container">
                <h1 className="hero-heading">Manage Salesforce<sup>®</sup> Subscriptions</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar sections={sections} />
              </div>
              <div className="col-lg-9">
                <Section description={sections[0].description} headline={sections[0].headline} id={sections[0].id} />
                <Section headline={sections[1].headline} id={sections[1].id} />
                <Section headline={sections[2].headline} id={sections[2].id} />
              </div>
            </div>
          </div>
        </form>
      </main>
    )
  }
}

export default Main;
