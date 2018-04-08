import React, { Component } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import LocationsDropdown from '../components/LocationsDropdown';
import Header from '../components/Header';
import Teams from '../components/Teams';
import SignOutButton from '../components/SignOutButton';
import isAuthenticated from '../components/IsAuthenticated';

const Dashboard = (props) => {
    console.log(props)
    return (
        <div>
                <Header teams={props.teams} />
            <main className="app-content">
                <header className="controls-bar">
                    <ul className="controls-bar__controls">
                        <li>Warehouse Fashions</li>
                        {/* <LocationsDropdown locations={props.locations} /> */}
                        <li><SignOutButton /></li>
                    </ul>
                </header>
                {/* {<Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler} />} */}
                {/* <Teams /> */}
            </main>
            </div>
    );
}

const authStatus = (authUser) => !!authUser;


export default isAuthenticated(Dashboard);