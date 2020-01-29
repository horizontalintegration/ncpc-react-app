class MyInterestsService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;

    this.DATA = [
      {
        "catcontrolType": "formGroup",
        "catid": "a002E00000Zkwag",
        "interests": [
          {
            "checked": true,
            "controlType": "checkbox",
            "description": "Learn more about how Salesforce enforces equality. Learn more about how Salesforce enforces equality.",
            "disabled": false,
            "id": "a012E00000hXAoHQAW",
            "url": "https://image.s10.sfmc-content.com/lib/fe3f157075640674761471/m/1/8c5bb801-5370-44a7-a043-ca40d2ff2af5.png",
            "label": "Equality",
            "order": 0
          }
        ],
        "catlabel": "General",
        "catorder": 1
      },{
        "catcontrolType": "formGroup",
        "catid": "a002E00000Zkwaq",
        "interests": [
          {
            "checked": false,
            "controlType": "checkbox",
            "description": "Learn more about hnow Salesforce thinks about AI.",
            "disabled": false,
            "id": "a012E00000hW5JLQA0",
            "url": "https://image.s10.sfmc-content.com/lib/fe3f157075640674761471/m/1/69fa4d4a-d39b-4394-a3b5-2463eb4dcc91.png",
            "label": "Artificial Intelligence",
            "order": 0
          }
        ],
        "catlabel": "Sales Cloud",
        "catorder": 0
      }
    ];
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/interests?id={{USER_ID}}&langBU={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('MyInterestsService.get()');

    return Promise.resolve(this.DATA);
  }

  async post() {
    console.log('MyInterestsService.post()');
  }
}

export default MyInterestsService;
