import React, { Fragment } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import LocationsDropdown from '../components/LocationsDropdown';
import Header from '../components/Header';
import Teams from '../components/Teams';
import SignOutButton from '../components/SignOutButton';

const Dashboard = (props) => {
    console.log(props)
    return (
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
}



export default Dashboard;