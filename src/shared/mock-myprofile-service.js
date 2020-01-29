class MyProfileService {
  constructor(businessUnit, id, wsBaseUrl, wsEndpoint) {
    this.businessUnit = businessUnit;
    this.id = id;
    this.wsEndpoint = wsBaseUrl + wsEndpoint;

    this.DATA = [
      {
        allowMultiple: true,
        controlType: 'MultiSelect',
        disabled: false,
        id: 'interests',
        label: 'Product Interest',
        mappedField: '',
        order: 3,
        options: [
          {
            id: 'a0Y2E00000c6W0eUAE',
            key: 'Value 5 (Option)',
            label: 'Value 5 (Option)',
            order: 4,
            value: 'a0Y2E00000c6W0eUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0jUAE',
            key: 'Value 4 (Option)',
            label: 'Value 4 (Option)',
            order: 3,
            value: 'a0Y2E00000c6W0jUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0pUAE',
            key: 'Value 3 (Option)',
            label: 'Value 3 (Option)',
            order: 2,
            value: 'a0Y2E00000c6W0pUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0xUAE',
            key: 'Value 2 (Option)',
            label: 'Value 2 (Option)',
            order: 1,
            value: 'a0Y2E00000c6W0xUAE',
            selected: false
          },{
            id: 'a0Y2E00000c6W0oUAE',
            key: 'Value 1 (Option)',
            label: 'Value 1 (Option)',
            order: 0,
            value: 'a0Y2E00000c6W0oUAE',
            selected: false
          }
        ],
        placeholder: 'Select options',
        value: [
          {
            id: 'a0Y2E00000c6W0pUAE',
            key: 'Value 3 (Option)',
            label: 'Value 3 (Option)',
            order: 2,
            value: 'a0Y2E00000c6W0pUAE',
            selected: false
          }
        ]
      },{
        controlType: 'EmailInput',
        disabled: true,
        id: 'email',
        label: 'Email',
        mappedField: '',
        order: 2,
        placeholder: 'Enter your email',
        value: 'a_young@dickenson.com',
      },{
        controlType: 'TextInput',
        disabled: false,
        id: 'lastName',
        label: 'Last Name',
        mappedField: '',
        order: 1,
        placeholder: 'Enter your last name',
        value: 'Young',
      },{
        controlType: 'TextInput',
        disabled: false,
        id: 'firstName',
        label: 'First Name',
        mappedField: '',
        order: 0,
        placeholder: 'Enter your first name',
        value: 'Andy',
      }
    ];
  };

  /*
   * GET
   * URI: https://ncpc-horizontal.herokuapp.com/profile?id={{USER_ID}}&bu={{BUSINESS_UNIT}}
   */
  async get() {
    console.log('MyProfileService.get()');

    return Promise.resolve(this.DATA);
  }

  /*
   * POST
   * URI: https://ncpc-horizontal.herokuapp.com/profile
   * PAYLOAD:
   * {"subscriberKey":"{{USER_ID}}","method":"postProfile","bu":"{{BUSINESS_UNIT}}","data":{"field":"{{FIELD_NAME}}","value":"{{FIELD_VALUE}}"}}
   */
  async post() {
    console.log('MyProfileService.post()');
  }
}

export default MyProfileService;
