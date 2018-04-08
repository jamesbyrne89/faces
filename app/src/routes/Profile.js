import React, { Fragment } from 'react';
import Header from '../components/Header';
import LocationsDropdown from '../components/LocationsDropdown';
import SignOutButton from '../components/SignOutButton';



const Profile = (props) => (
    <Fragment>
        <Header teams={props.teams} />
        <main className="app-content">
            <header className="controls-bar">
                <ul className="controls-bar__controls">
                    <li>Warehouse Fashions</li>
                    <LocationsDropdown locations={props.locations} />
                    <li><SignOutButton /></li>
                </ul>
            </header>
            {/* {<Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler} />} */}
            {/* <Teams /> */}
        </main>
    </Fragment>
);

export default Profile;