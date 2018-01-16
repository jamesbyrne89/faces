import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Teams from '../views/Teams';
import '../styles.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="app-title"><Link to='/'>faces</Link></h1>
            <nav>
                <ul>
                    <li>View seating plan</li>
                    
                        <li>
                            <Link to='/teams'>Teams</Link>
                        </li>
                    
                    <li>All Team Members</li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;