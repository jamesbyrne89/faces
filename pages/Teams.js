import React, { Component } from 'react';
import Header from '../components/Header';


const Teams = props => {
    console.log(props)
    return (
        <div>
            <Header />
            <ul className="app-content">
                {/* {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team.name} members={team.profiles} /></li>)} */}
            </ul>
        </div>
    );
}

export default Teams;