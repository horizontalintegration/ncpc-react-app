import 'react-app-polyfill/ie11';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import cssVars from 'css-vars-ponyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { sortBy } from 'lodash';

import ConfigService from './services/config-service.dev';

import AppContext from './AppContext';
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
      sections: [],
      wsBaseUrl: ''
    };

    this.configService = new ConfigService();

    this.sharedContext = {
      bu: null,
      id: null,
      lang: null,
      wsBaseUrl: null
    };

    this.urlParams = new URLSearchParams(window.location.search);
  }

  componentWillMount() {
    const id = (this.urlParams.has('id') ? this.urlParams.get('id') : null);
    const langBU = (this.urlParams.has('langBU') ? this.urlParams.get('langBU').split('-') : 'EN-US');
    const bu = (langBU.length ? langBU[0] : null);
    const lang = (langBU.length === 2 ? langBU[1] : null);

    this.sharedContext.bu = bu;
    this.sharedContext.id = id;
    this.sharedContext.lang  = lang;
  }

  componentDidMount() {
    this.configService.get().then(data => {
      data.sections = sortBy(data.sections, 'order');

      this.setState(data);
    })
  }

  render() {
    // wsBaseUrl comes from a web service call instead of from a query string param, so we set it here instead of in componentWillMount().
    this.sharedContext.wsBaseUrl = this.state.wsBaseUrl;

    return (
      <React.Fragment>
        <AppContext.Provider value={this.sharedContext}>
          <Header logo={this.state.images.logo} />
          <Main banner={this.state.banner} sections={this.state.sections} wsBaseUrl={this.state.wsBaseUrl} />
          <Footer />
        </AppContext.Provider>
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