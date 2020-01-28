class MySubscriptionsService {
  constructor(wsBaseUrl, wsEndpoint, businessUnit) {
    this.businessUnit = businessUnit;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;

    this.DATA = [
      {
        controlType: 'formGroup',
        id: 'a002E00000Zkwaq',
        isActive: false,
        label: 'Sales Cloud',
        order: 1,
        subscriptions: [
          {
            "campaigns": [],
            "channel": "email",
            "checked": true,
            "controlType": "switch",
            "description": "A quarterly newsletter discussing new innovations on nutrition",
            "disabled": false,
            "id": "a012E00000hJ2uKQAS",
            "label": "Sales Cloud Webinar",
            "order": 1
          },{
            "campaigns": [],
            "channel": "email",
            "checked": true,
            "controlType": "switch",
            "description": "A periodic email informing you of upcoming events in your local community",
            "disabled": false,
            "id": "a012E00000hJ2uPQAS",
            "label": "Community Events",
            "order": 0
          }
        ]
      },{
        controlType: 'formGroup',
        id: 'a002E00000Zkwag',
        isActive: true,
        label: 'General',
        order: 0,
        subscriptions: [
          {
            "campaigns": [
              {
                "checked": false,
                "controlType": "facet",
                "disabled": false,
                "id": "7012E000001gjXoQAI",
                "label": "Eagan Community Group",
                "order": 4
              },{
                "checked": false,
                "controlType": "facet",
                "disabled": false,
                "id": "7012E000001gjXjQAI",
                "label": "Minneapolis Community Group",
                "order": 3
              },{
                "checked": true,
                "controlType": "facet",
                "disabled": false,
                "id": "7012E000001gkaxQAA",
                "label": "Sales Cloud",
                "order": 2
              },{
                "checked": true,
                "controlType": "facet",
                "disabled": false,
                "id": "7012E000001gkAqQAI",
                "label": "St Louis Park Community Group",
                "order": 1
              },{
                "checked": true,
                "controlType": "facet",
                "disabled": false,
                "id": "7012E000001gkAlQAI",
                "label": "Bloomington Community Group",
                "order": 0
              }
            ],
            "channel": "email",
            "checked": false,
            "controlType": "switch",
            "description": "A periodic email informing you of upcoming events in your local community",
            "disabled": false,
            "id": "a012E00000jb02uQAA",
            "label": "Community Group",
            "order": 4
          },{
            "campaigns": [],
            "channel": "email",
            "checked": true,
            "controlType": "switch",
            "description": "A monthly newsletter discussing topics to help the world thrive",
            "disabled": false,
            "id": "a012E00000hJ2uAQAS",
            "label": "Partner Program",
            "order": 3
          },{
            "campaigns": [],
            "channel": "email",
            "checked": false,
            "controlType": "switch",
            "description": "Join our webinars to see what's new!A monthly newsletter discussing topics to help the world thrive",
            "disabled": false,
            "id": "a012E00000hVs5pQAC",
            "label": "Marketing Cloud Release Webinars",
            "order": 2
          },{
            "campaigns": [],
            "channel": "sms",
            "checked": false,
            "controlType": "switch",
            "description": "Alerts based on outages in the products & stacks associated to youIt's a great way to connect with your community",
            "disabled": false,
            "id": "a012E00000jdlHvQAI",
            "label": "Outage Notifications",
            "order": 1
          },{
            "campaigns": [],
            "channel": "email",
            "checked": true,
            "controlType": "switch",
            "description": "A monthly newsletter sharing trends, insights and solutions for label-friendly formulations",
            "disabled": false,
            "id": "a012E00000hJ2IGQA0",
            "label": "Analytics Champion Fireside",
            "order": 0
          }
        ]
      }
    ];
  };

  async get() {
    console.log('MySubscriptionsService.get()');

    return Promise.resolve(this.DATA);
  }

  async post() {
    console.log('MySubscriptionsService.post()');
  }
}

export default MySubscriptionsService;
