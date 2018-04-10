import React, { Fragment } from 'react';
import ProfileCard from '../components/ProfileCard';
import LocationsDropdown from '../components/LocationsDropdown';
import Header from '../components/Header';
import Teams from '../components/Teams';
import SignOutButton from '../components/SignOutButton';
import { modalHandler } from '../helpers/modal'

const Dashboard = (props) => {
    const { teams } = props;
    console.log(teams)
    return (
        <div className="app-container">
                <Header teams={teams} />
            <main className="app-content">
                <header className="controls-bar">
                    <ul className="controls-bar__controls">
                        <li>Warehouse Fashions</li>
                        <LocationsDropdown locations={props.locations} />
                        <li><SignOutButton /></li>
                    </ul>
                </header>
                
                 <Teams modalHandler={modalHandler} teams={teams} />
            </main>
            </div>
    );
}



export default Dashboard;