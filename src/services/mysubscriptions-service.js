import $ from 'jquery';

class MySubscriptionsService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/subscriptions?id={{USER_ID}}&langBU={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('MySubscriptionsService.get()');

    const wsUri = this.wsEndpoint + '?id=' + this.id + '&langBU=' + this.businessUnit;

    let options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    };

    return fetch(wsUri, options)
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

  /*
   * POST
   * URI: https://ncpc-horizontal.herokuapp.com/subscriptions
   * PAYLOAD:
   * {
   *   "bu": "{{BUSINESS_UNIT}}",
   *   "method": "postSub",
   *   "subscriberKey": "{{USER_ID}}",
   *   "data": {
   *     "field":"{{FIELD_NAME}}",
   *     "value":"{{FIELD_VALUE}}"
   *   }
   * }
   */
  async post(fieldName, fieldValue) {
    console.log('MySubscriptionsService.post()', fieldName, fieldValue);
    
    const wsUri = this.wsEndpoint + '?id=' + this.id + '&langBU=' + this.businessUnit;

    let body = {
      id: this.id,
      customerSubId: '',
      availableSubId: fieldName,
      method: 'postSub',
      value: fieldValue
    };

    let options = {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    return fetch(wsUri, options)
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

export default MySubscriptionsService;
