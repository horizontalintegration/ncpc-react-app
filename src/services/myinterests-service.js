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
        if (!response.ok) throw response;
        
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
   *   "subscriberKey": {{USER_ID}},
   *   "method": "postInt",
   *   "bu": {{BUSINESS_UNIT}},
   *   "availableIntId": {{ }},
   *   "userIntId": {{ }},
   *   "value": fieldValue
   * }
   */
  async post(availableIntId, userIntId, fieldValue) {
    console.log('MyInterestsService.post()');

    const wsUri = this.wsEndpointPOST;

    let data = {
      availableIntId: availableIntId,
      bu: this.businessUnit,
      customerIntId: userIntId,
      method: 'postInt',
      subscriberKey: this.id,
      value: fieldValue
    };

    let options = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    return fetch(wsUri)
      .then(response => {
        if (!response.ok) {
          // TODO: Handle server exception.
        }
        
        return response.json();
      })
      .then(json => json)
      .catch(error => {
        // TODO: Handle server fault.
      });
  }
}

export default MyInterestsService;
