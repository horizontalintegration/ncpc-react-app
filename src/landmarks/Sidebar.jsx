import React from 'react';

import $ from 'jquery';

import { isEqual } from 'lodash';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    const { sections } = props;

    this.state = {
      sections: sections
    }

    /*
     * EVENT HANDLERS
     */

    this.onClick = event => {
      event.preventDefault();
  
      const $this = $(event.target);
      const $anchor = $(`a[name="${ $this.attr('href').replace('#', '') }"]`);
      const $header = $('header');
  
      $('html, body').animate({
        scrollTop: $anchor.offset().top - $header.outerHeight()
      }, 'fast');
    }
  }

  /*
   * LIFECYCLE METHODS
   */

  render() {
    const listItems = this.state.sections.map(section => {
      return(
        <li key={section.id}><a href={"#" + section.id} onClick={this.onClick}>{section.headline}</a></li>
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

  componentDidUpdate(prevProps) {
    if(!isEqual(this.props.sections, prevProps.sections)) {
      this.setState({ sections:this.props.sections });
    }
  }
}

export default Sidebar;
