import React, { Component } from 'react';
import App from './App';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SiteHead from '../components/Head';


const Teams = props => {
    console.log(props)
    return (
        <App>
        <Layout>
            <SiteHead title={'Teams'} />
            <main className="app-container">
                <ul className="app-content">
                    {/* {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team.name} members={team.profiles} /></li>)} */}
                </ul>
            </main>
        </Layout>
        </App>
    );
}

export default Teams;