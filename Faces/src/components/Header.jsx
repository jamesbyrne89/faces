import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Teams from '../views/Teams';
import '../styles.css';

const Header = (props) => {
    const { teams } = props;
    return (
        <header className="header">
            <h1 className="app-title"><Link to='/'>faces</Link></h1>
            <nav>
                <ul>
                    <li>View seating plan</li>
                    
                        <li>
                            <Link to='/teams'>Teams</Link>
                        </li>
                    { teams.map(team => <li className="menu__subitem">{team.name}</li>) }
                </ul>
            </nav>
        </header>
    );
}

export default Header;