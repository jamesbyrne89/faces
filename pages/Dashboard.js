import React, { Component } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import LocationsDropdown from '../components/LocationsDropdown';
import Header from '../components/Header';
import Link from 'next/link';
import base from '../models/Data';


const Dashboard = (props)=> {
    return (
        
            <div className="app-container" >

                <Header teams={teams} />
                <main className="app-content">
                    <header className="controls-bar">

                        <ul className="controls-bar__controls">
                            <li>Warehouse Fashions</li>
                            <LocationsDropdown locations={locations} />
                            <li><button className="btn">Sign Out</button></li>
                        </ul>
                    </header>
                    <Dashboard profiles={'allEmployees'} modalHandler={this.modalHandler} />
                    {/* <Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler} /> */}
                </main>
            </div>
    );
}

export default Dashboard;