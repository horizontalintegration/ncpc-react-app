import React from 'react';

import { isEqual } from 'lodash';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const { sections } = props;

    this.state = {
      sections: sections
    }
  }

  componentDidUpdate(prevProps) {
    if(!isEqual(this.props.sections, prevProps.sections)) {
      this.setState({ sections:this.props.sections });
    }
  }

  render() {
    const listItems = this.state.sections.map(section => {
      return(
        <li key={section.id}><a href={"#" + section.id}>{section.headline}</a></li>
      )
    });

    return (
      <div className="sidebar">
        <ul className="sidebar-links list-unstyled">
          {listItems}
        </ul>
        <button className="btn btn-lg btn-primary" id="sidebar-btn-save" data-text="Save" data-saving-text="Saving...">Save</button>
      </div>
    )
  }
}

export default Sidebar;
