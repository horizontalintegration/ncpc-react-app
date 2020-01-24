import React from 'react';

import { Checkbox } from '../elements';

class MyInterests extends React.Component {
  render() {
    const interests = [
      {
        "controlType": "formGroup",
        "id": "a002E00000Zkwaq",
        "interests": [
          {
            "checked": false,
            "controlType": "checkbox",
            "description": "Learn more about hnow Salesforce thinks about AI.",
            "disabled": false,
            "id": "a012E00000hW5JLQA0",
            "imageUrl": "https://image.s10.sfmc-content.com/lib/fe3f157075640674761471/m/1/69fa4d4a-d39b-4394-a3b5-2463eb4dcc91.png",
            "label": "Artificial Intelligence",
            "order": 0
          }
        ],
        "label": "Sales Cloud",
        "order": 0
      },{
        "controlType": "formGroup",
        "id": "a002E00000Zkwag",
        "interests": [
          {
            "checked": true,
            "controlType": "checkbox",
            "description": "Learn more about how Salesforce enforces equality. Learn more about how Salesforce enforces equality.",
            "disabled": false,
            "id": "a012E00000hXAoHQAW",
            "imageUrl": "https://image.s10.sfmc-content.com/lib/fe3f157075640674761471/m/1/8c5bb801-5370-44a7-a043-ca40d2ff2af5.png",
            "label": "Equality",
            "order": 0
          }
        ],
        "label": "General",
        "order": 1
      }
    ];

    const fieldGroups = interests.map(interestGroup => {
      return (
        interestGroup.interests.map(interest => {
          return (
            <div className="d-flex align-items-stretch pb-15px pl-15px pr-15px" key={interest.id}>
              <Checkbox attributes={interest} />
            </div>
          )
        })
      )
    });

    return (
      <div>
        <div className="mt-lg-5 row row-cols-1 row-cols-lg-3">
          {fieldGroups}
        </div>
      </div>
    )
  }
}

export default MyInterests;
