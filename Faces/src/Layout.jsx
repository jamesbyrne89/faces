import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import Modal from './components/Modal';
import ProfileCard from './components/ProfileCard';
import LocationsDropdown from './components/LocationsDropdown';
import App from './App';


const Layout = () => {
    return (
    <BrowserRouter>
        <Route path="/" exact component={App}/>
    
    </BrowserRouter>
    )
}

export default Layout;