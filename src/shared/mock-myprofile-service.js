class MyProfileService {
  constructor(webServiceUrl) {
    this.webServiceUrl = webServiceUrl;
    
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

  async get() {
    console.log('MyProfileService.get()');

    return Promise.resolve(this.DATA);
  }

  async post() {
    console.log('MyProfileService.post()');
  }
}

export default MyProfileService;
