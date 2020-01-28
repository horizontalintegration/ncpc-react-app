class ConfigService {
  constructor(wsBaseUrl, wsEndpoint, businessUnit) {
    this.businessUnit = businessUnit;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;

    this.DATA = {
      banner: 'Manage Salesforce® Subscriptions',
      businessUnit: 'EN-US',
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
      id: 'PCPC-0001',
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
          order: 2,
          wsEndpoint: '/subscriptions?id=0032E00002SKfXdQAL&langBU=EN-US',
        },{
          description: '',
          headline: 'My Interests',
          id: 'my-interests',
          order: 1,
          wsEndpoint: '/interests'
        },{
          description: 'When you subscribe to our monthly newsletter, you\'ll receive news about products, trends and more. Update you newsletter subscription to select the newsletter that best fits you. You can change this at any time.',
          headline: 'My Profile',
          id: 'my-profile',
          order: 0,
          wsEndpoint: '/profile',
        }
      ],
      wsBaseUrl: '//ncpc-postgres-horizontal.herokuapp.com'
    };
  };

  async get() {
    console.log('ConfigService.get()');

    return Promise.resolve(this.DATA);
  }
}

export default ConfigService;
