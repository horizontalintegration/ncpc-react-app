import 'react-app-polyfill/ie11';
import 'url-search-params-polyfill';
// import 'whatwg-fetch';
import cssVars from 'css-vars-ponyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { sortBy } from 'lodash';

import ConfigService from './services/config-service';

import AppContext from './AppContext';
import { Footer, Header, Main, Roadblock } from './landmarks';

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

    this.configService;

    this.sharedContext = {
      bu: null,
      id: null,
      lang: null,
      wsBaseUrl: null,
      setBusinessUnit: (language) => {
        this.sharedContext.bu = language.bu;
        this.sharedContext.lang = language.lang;
      }
    };

    this.sharedContextIsValid = false;

    this.urlParams = new URLSearchParams(window.location.search);

    this.parsePackageConfig = function(data) {
      const config = data.config[0];
      const languages = data.languages;

      let parsedLanguages = languages.map(language => {
        const parsedLanguage = {
          bu: language.ncpc__business_unit_parameter__c,
          label: language.name,
          lang: language.ncpc__language_parameter__c
        };
        return parsedLanguage;
      });

      let parsedData = {
        banner: config.ncpc__banner_text_2__c,
        colors: {
          brandPrimary: config.ncpc__brand_color_hex_code__c,
          buttonDefault: config.ncpc__button_color_hex_code__c,
          formSwitchActive: config.ncpc__active_toggle_color_hex_code__c,
        },
        images: {
          banner: {
            link: null,
            url: config.ncpc__banner_url__c
          },
          logo: {
            link: config.ncpc__logo_link_url__c,
            url: config.ncpc__logo_url__c
          }
        },
        languages: parsedLanguages,
        sections: [
          {
            "description": config.ncpc__profile_text__c,
            "headline": config.ncpc__profile_header__c,
            "id": "my-profile",
            "order": 0
          },{
            "description": config.ncpc__interest_text__c,
            "headline": config.ncpc__interest_header__c,
            "id": "my-interests",
            "order": 1
          },{
            "description": config.ncpc__subscription_intro__c,
            "headline": config.ncpc__subscription_header__c,
            "id": "my-subscriptions",
            "order": 2
          }
        ],
        wsBaseUrl: 'http://localhost:8010/proxy'
      };

      return parsedData;
    }
  }

  componentWillMount() { 
    const id = (this.urlParams.has('id') ? this.urlParams.get('id') : null);
    const langBU = (this.urlParams.has('langBU') ? this.urlParams.get('langBU').split('-') : []);
    const bu = (langBU.length === 2 ? langBU[1] : null);
    const lang = (langBU.length === 2 ? langBU[0] : null);

    this.sharedContext.bu = bu;
    this.sharedContext.id = id;
    this.sharedContext.lang  = lang;

    // id must exist and must be 18 characters in length.
    // bu must exist and must be 2 characters in length.
    if (id && id.length === 18 && bu && bu.length === 2) {
      this.sharedContextIsValid = true;
    }

    this.configService = new ConfigService(bu, lang, 'http://localhost:8010/proxy');
  }

  componentDidMount() {
    this.configService.get().then(data => {
      let parsedData = this.parsePackageConfig(data);

      parsedData.sections = sortBy(parsedData.sections, 'order');

      this.setState(parsedData);
    })
  }

  render() {
    // wsBaseUrl comes from a web service call instead of from a query string param, so we set it here instead of in componentWillMount().
    this.sharedContext.wsBaseUrl = this.state.wsBaseUrl;

    return (
      <React.Fragment>
        <AppContext.Provider value={this.sharedContext}>
          <Header languages={this.state.languages} logoImage={this.state.images.logo.url} logoLink={this.state.images.logo.link} />
          {this.renderMain(this.sharedContextIsValid)}
          <Footer />
          <style>
            {`
            :root {
              --brand-primary: ${this.state.colors.brandPrimary};

              --button-default: ${this.state.colors.buttonDefault};
              --button-hover: #146BCF;
      
              --form-check-active: ${this.state.colors.brandPrimary};
              --form-check-active-hover: #146BCF;
              --form-check-default: #D1CFCE;
              --form-check-hover: #146BCF;
      
              --form-switch-active: ${this.state.colors.formSwitchActive};
              --form-switch-default: #646464;
              --form-switch-disabled: #CCCCCC;
              --form-switch-hover: #146BCF;
            }
            `}
          </style>
        </AppContext.Provider>
      </React.Fragment>
    )
  }

  renderMain(isValid) {
    if (isValid) {
      return <Main banner={this.state.banner} sections={this.state.sections} wsBaseUrl={this.state.wsBaseUrl} />;
    } else {
      return <Roadblock />;
    }
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

// Instantiate the CSS Variables Ponyfill. (SEE: https://jhildenbiddle.github.io/css-vars-ponyfill/)
cssVars();