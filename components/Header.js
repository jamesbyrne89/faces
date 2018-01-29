import React, { Component } from 'react';
import Link from 'next/link';

const Header = (props) => {
    console.log('header', props)
    const { teams } = props;
    return (
        <header className="header">
            <h1 className="app-title"><Link to='/'>faces</Link></h1>
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
    );
}

export default Header;