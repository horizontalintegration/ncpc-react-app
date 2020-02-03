class MyProfileService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpointGET, wsEndpointPOST) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpointGET = wsBaseUrl + wsEndpointGET;
    this.wsEndpointPOST = wsBaseUrl + wsEndpointPOST;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/profile?id={{USER_ID}}&langBU={{BUSINESS_UNIT}}
   */
  async get() {
    const wsUri = this.wsEndpointGET + '?id=' + this.id + '&langBU=' + this.businessUnit;

    console.log('MyProfileService.get()');

    return fetch(wsUri)
      .then(response => {
        return response.json();
      })
      .then(json => json)
      .catch(error => {
        throw error;
      });
  }

  /*
   * POST
   * URI: https://ncpc-horizontal.herokuapp.com/profile
   * PAYLOAD:
   * {
   *   "field":"{{FIELD_NAME}}",
   *   "id": "{{USER_ID}}",
   *   "value":"{{FIELD_VALUE}}"
   * }
   */
  async post(fieldName, fieldValue) {
    console.log('MyProfileService.post()', fieldName, fieldValue);

    const wsUri = this.wsEndpointPOST;

    let data = {
      field: fieldName,
      id: this.id,
      value: fieldValue,
    };

    let options = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    return fetch(wsUri, options)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        // TODO: Handle service fault.
      });
  }
}

export default MyProfileService;
