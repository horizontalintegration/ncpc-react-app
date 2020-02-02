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
        if (!response.ok) throw response;
        
        return response.json();
      })
      .then(json => json)
      .catch(error => {
        throw error;
      });
  }

  /*
   * POST (Campaign)
   * URI: https://ncpc-horizontal.herokuapp.com/subscriptions
   * PAYLOAD:
   * {
   *   "bu": "{{BUSINESS_UNIT}}",
   *   "campaignId":"{{ }}",
   *   "campaignMemberId": "{{ }}",
   *   "method": "postSub",
   *   "status":"false",
   *   "subscriberKey": "{{USER_ID}}"
   * }
   */
  async postCampaign(campaignId, campaignMemberId) {
    console.log('MySubscriptionsService.postCampaign()', campaignId, campaignMemberId);
    
    const wsUri = this.wsEndpoint + '?id=' + this.id + '&langBU=' + this.businessUnit;

    let body = {
      bu: this.businessUnit,
      campaignId: campaignId,
      campaignMemberId: campaignMemberId,
      method: 'postSub',
      status: false,
      subscriberKey: this.id
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

  /*
   * POST (Subscription)
   * URI: https://ncpc-horizontal.herokuapp.com/subscriptions
   * PAYLOAD:
   * {
   *   "availableSubId":"{{ }}",
   *   "bu": "{{BUSINESS_UNIT}}",
   *   "customerSubId": "{{ }}"
   *   "method": "postSub",
   *   "subscriberKey": "{{USER_ID}}",
   *   "value":"{{FIELD_VALUE}}"
   * }
   */
  async postSubscription(availableSubId, customerSubId, fieldValue) {
    console.log('MySubscriptionsService.postSubscription()', availableSubId, customerSubId, fieldValue);
    
    const wsUri = this.wsEndpoint + '?id=' + this.id + '&langBU=' + this.businessUnit;

    let body = {
      availableSubId: availableSubId,
      bu: this.businessUnit,
      customerSubId: customerSubId,
      method: 'postSub',
      subscriberKey: this.id,
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

  /*
   * POST (Unsubscribe All)
   * URI: https://ncpc-horizontal.herokuapp.com/subscriptions
   * PAYLOAD:
   * {
   *   "bu": "{{BUSINESS_UNIT}}",
   *   "method": "postSub",
   *   "subscriberKey": "{{USER_ID}}",
   * }
   */
  async postUnsubscribeAll() {
    console.log('MySubscriptionsService.postUnsubscribeAll()');
  }
}

export default MySubscriptionsService;
