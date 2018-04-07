import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = props => {
    console.log(props)
    const { teams } = props;
    return (
        <BrowserRouter>
        <header className="header">
            <h1 className="app-title"><Link path={'/'}><a>faces</a></Link></h1>
            <nav>
                <ul>
                    <li>View seating plan</li>
                    
                        <li>
                            <Link href='Teams' teams={teams}><a>Teams</a></Link>
                        </li>
                    {/* { teams.map((team, i) => <li className="menu__subitem" key={i}>{team.name}</li>) } */}
                </ul>
            </nav>
        </header>
        </BrowserRouter>
    );
}

export default Header;