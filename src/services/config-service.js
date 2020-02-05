import LoggingService from './logging-service';

class ConfigService {
  constructor(bu, lang, wsBaseUrl) {
    this.bu = bu;
    this.lang = lang;
    this.logger = new LoggingService(wsBaseUrl);
    this.wsBaseUrl = wsBaseUrl;
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/package?langBU={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('ConfigService.get()');

    const wsUri = this.wsBaseUrl + '/package?langBU=' + this.lang + '-' + this.bu;

    return fetch(wsUri)
      .then(response => response.json())
      .then(response => {
        if (response.success && response.success === 'fail') {
          this.logger.post(wsUri, response.message, response.status, response.body);
        }

        return response;
      })
      .catch(error => {
        this.logger.post(wsUri, error, '500', options);

        throw error;
      });
  }
}

export default ConfigService;
