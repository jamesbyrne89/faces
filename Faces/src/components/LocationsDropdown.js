import React, { Component } from 'react';
import NewPhoto from '../views/NewPhoto';


class LocationsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showHide() {
        this.setState({
            visible: !this.state.visible
        });
    }

    getLocationsList() {
        const { locations } = this.props;
        return locations.list.filter(loc => loc !== locations.current  )
    }

    renderDropdown() {
        if (this.state.visible) {
        return (
                <div className="menu-dropdown">
                    <ul>{this.getLocationsList().map(loc=><li key={loc}><button className="btn">{loc}</button></li>)}</ul>
                </div>
        ) 
     }
     else { return }
    }

    render() {
        let isVisible = this.state.visible;
       const locationList = this.getLocationsList.bind(this)
    return (
        <li>
            <button className="btn location" onClick={this.showHide.bind(this)}><i className="fa fa-map-marker"></i> London</button>
            {this.renderDropdown()}
        </li>
    );
    }
}

export default LocationsDropdown;