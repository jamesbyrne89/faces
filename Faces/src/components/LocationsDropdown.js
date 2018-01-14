import React, { Component } from 'react';
import NewPhoto from '../views/NewPhoto';

const locationBtn = document.querySelector('.location')
console.log(locationBtn)


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

    render() {
        let isVisible = this.state.visible;
       let classes = isVisible ? "menu-dropdown menu-dropdown--visible" : "hidden"
    return (
    <div className={classes}>
        <ul>{this.props.locations.map(loc=><li key={loc}>{loc}</li>)}</ul>
    </div>
    );
    }
}

export default LocationsDropdown;