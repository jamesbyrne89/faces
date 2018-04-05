import React from 'react';
import Header from './Header';
import LocationsDropdown from './LocationsDropdown';

const Layout = (props) => {
    const signOut = props.signOut;
    console.log(props)
        return (
            
            <div className="app-container">
                <Header locations={props.locations} teams={props.teams} />
                <header className="controls-bar">

                        <ul className="controls-bar__controls">
                            <li>Warehouse Fashions</li>
                            {/* <LocationsDropdown locations={props.locations} /> */}
                            <li><button className="btn" onClick={signOut}>Sign Out</button></li>
                        </ul>
                    </header>
                {props.children}
            </div>
        );
}

export default Layout;