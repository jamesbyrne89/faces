import React, { Component } from 'react';
import App from '../App';
import Layout from './Layout';
import Header from './Header';


const Teams = props => {
    console.log(props)
    return (

            
            <main className="app-container">
                <ul className="app-content">
                    {/* {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team.name} members={team.profiles} /></li>)} */}
                </ul>
            </main>
    
    );
}

export default Teams;