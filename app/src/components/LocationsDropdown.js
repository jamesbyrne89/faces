import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LocationsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.locationList = this.getLocationsList.bind(this);
  }

  showHide() {
    this.setState({
      visible: !this.state.visible
    });
  }

  getLocationsList() {
    const { locations } = this.props;
    return locations.list.filter(loc => loc !== locations.current);
  }

  render() {
    return (
      <li>
        <button className="btn location" onClick={this.showHide.bind(this)}>
          <i className="fa fa-map-marker" /> London
        </button>
        <div className="menu-dropdown__wrapper">
          <div className="menu-dropdown">
            <ul>
              {this.getLocationsList().map(loc => (
                <li key={loc}>
                  <a className="btn">{loc}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

LocationsDropdown.PropTypes = {
  locations: PropTypes.array
};

export default LocationsDropdown;
