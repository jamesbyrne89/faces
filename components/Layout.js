import React from 'react';
import Header from 'Header';
import './styles.css';

const Layout = (props) => {
        return ( 
            <div className="app-container">
                <Header />
                {props.children}
            </div>
        );
}

export default Layout;