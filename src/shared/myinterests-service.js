class MyInterestsService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/interests?id={{USER_ID}}&langBU={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('MyInterestsService.get()');

    const wsUri = this.wsEndpoint + '?id=' + this.id + '&langBU=' + this.businessUnit;

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

  async post() {
    console.log('MyInterestsService.post()');
  }
}

export default MyInterestsService;
