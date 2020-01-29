class MyProfileService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/profile?id={{USER_ID}}&bu={{BUSINESS_UNIT}}
   */
  async get() {
    const wsUri = this.wsEndpoint + '?id=' + this.id + '&bu=' + this.businessUnit;

    console.log('MyProfileService.get()');

    fetch(wsUri)
      .then(res => res.json())
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(console.log);
  }

  /*
   * POST
   * URI: https://ncpc-horizontal.herokuapp.com/profile
   * PAYLOAD:
   * {
   *   "subscriberKey": "{{USER_ID}}",
   *   "method": "postProfile",
   *   "bu": "{{BUSINESS_UNIT}}",
   *   "data": {
   *     "field":"{{FIELD_NAME}}",
   *     "value":"{{FIELD_VALUE}}"
   *   }
   * }
   */
  async post(fieldName, fieldValue) {
    console.log('MyProfileService.post()', fieldName, fieldValue);

    const wsUri = this.wsEndpoint;

    let data = {
      bu: this.businessUnit,
      data: {
        field: fieldName,
        value: fieldValue,
      },
      method: 'postProfile',
      mode: 'cors',
      subscriberKey: this.id,
    };

    let options = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    fetch(wsUri, options)
      .then(response => {
        if (!response.ok) {
          // TODO: Handle error condition.
        }

        return Promise.resolve(response.json());
      })
      .catch(error => {
        // TODO: Handle service fault.
      });
  }
}

export default MyProfileService;
