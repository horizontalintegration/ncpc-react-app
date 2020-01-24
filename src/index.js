import 'react-app-polyfill/ie11';
import cssVars from 'css-vars-ponyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import ConfigService from './shared/mock-config-service';

import { Footer, Header, Main } from './landmarks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banner: '',
      colors: [],
      images: {
        banner: {},
        logo: {}
      },
      sections: []
    };

    this.configService = new ConfigService();
  }

  componentDidMount() {
    this.configService.getConfig().then(config => {
      this.setState(config);
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header logo={this.state.images.logo} />
        <Main banner={this.state.banner} sections={this.state.sections} />
        <Footer />
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

// Instantiate the CSS Variables Ponyfill. (SEE: https://jhildenbiddle.github.io/css-vars-ponyfill/)
cssVars();

// Override CSS Variables
// document.documentElement.style.setProperty("--brand-primary", "#658D1B");
// document.documentElement.style.setProperty("--brand-primary-active", "#466213");