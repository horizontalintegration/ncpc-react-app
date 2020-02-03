class MyInterestsService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpointGET, wsEndpointPOST) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpointGET = wsBaseUrl + wsEndpointGET;
    this.wsEndpointPOST = wsBaseUrl + wsEndpointPOST;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/interests?id={{USER_ID}}&langBU={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('MyInterestsService.get()');

    const wsUri = this.wsEndpointGET + '?id=' + this.id + '&langBU=' + this.businessUnit;

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
   * URI: https://ncpc-horizontal.herokuapp.com/interests
   * PAYLOAD:
   * {
   *   "availableIntId": {{ }},
   *   "customerIntId": {{ }},
   *   "id": {{USER_ID}},
   *   "value": fieldValue
   * }
   */
  async post(availableIntId, userIntId, fieldValue) {
    console.log('MyInterestsService.post()');

    const wsUri = this.wsEndpointPOST;

    let data = {
      availableIntId: availableIntId,
      customerIntId: userIntId,
      id: this.id,
      value: fieldValue
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
      .then(json => json)
      .catch(error => {
        throw error;
      });
  }
}

export default MyInterestsService;
