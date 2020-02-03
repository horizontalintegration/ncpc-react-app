class ConfigService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;
  }

  async get() {
    console.log('ConfigService.get()');

    return Promise.resolve(ConfigService.DATA);
  }
}

ConfigService.DATA = {
  banner: 'Manage Salesforce® Subscriptions',
  colors: [
    {
      id: '????',
      label: 'brand-primary',
      value: '#2275D3'
    },{
      id: '????',
      label: 'button-primary',
      value: '#2275D3'
    },{
      id: '????',
      label: 'toggle-active',
      value: '#2275D3'
    }
  ],
  images: {
    banner: {
      id: '????',
      label: 'Salesforce® Logo',
      url: 'https://image.s10.sfmc-content.com/lib/fe3215707564077a7c1c71/m/1/0b4a84c6-b2b5-4563-8f73-d8276bd9010c.png'
    },
    logo: {
      id: '????',
      label: 'logo',
      url: 'https://image.s10.sfmc-content.com/lib/fe3215707564077a7c1c71/m/1/7ceedbbc-d950-45e8-997e-d3199e248ac4.png'
    }
  },
  sections: [
    {
      description: '',
      headline: 'My Subscriptions',
      id: 'my-subscriptions',
      order: 2
    },{
      description: '',
      headline: 'My Interests',
      id: 'my-interests',
      order: 1
    },{
      description: 'When you subscribe to our monthly newsletter, you\'ll receive news about products, trends and more. Update you newsletter subscription to select the newsletter that best fits you. You can change this at any time.',
      headline: 'My Profile',
      id: 'my-profile',
      order: 0
    }
  ],
  wsBaseUrl: '../sampleData'
};

export default ConfigService;
