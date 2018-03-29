import React from 'react';
import Header from './Header';
import LocationsDropdown from './LocationsDropdown';

const Layout = (props) => {
        return ( 
            <div className="app-container">
                <Header />
                <header className="controls-bar">

                        <ul className="controls-bar__controls">
                            <li>Warehouse Fashions</li>
                            <LocationsDropdown locations={props.locations} />
                            <li><button className="btn">Sign Out</button></li>
                        </ul>
                    </header>
                {props.children}
            </div>
        );
}

export default Layout;