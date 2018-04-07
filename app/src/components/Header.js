import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    console.log(props)
    const { teams } = props;
    return (
        <header className="header">
            <h1 className="app-title"><Link to={'/'}>faces</Link></h1>
            <nav>
                <ul>
                    <li>View seating plan</li>
                    
                        <li>
                            <Link to={'Teams'} teams={teams}>Teams</Link>
                        </li>
                    { teams.map((team, i) => <li className="menu__subitem" key={i}>{team.name}</li>) }
                </ul>
            </nav>
        </header>
    );
}

export default Header;