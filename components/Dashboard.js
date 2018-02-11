import React, { Component } from 'react';
import SiteHead from '../components/Head';

const Dashboard = props => {
    console.log(props)
    return ( <div >
        <SiteHead title={'Dashboard'} />
        <h2 className="page-title">Dashboard</h2>
        <ul>
            <li></li>
        </ul>
    </div>
    );
}

export default Dashboard;