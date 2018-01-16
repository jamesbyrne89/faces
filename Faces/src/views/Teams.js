import React, { Component } from 'react';
import TeamCard from '../components/TeamCard';
import '../styles.css';


const Teams = props => {
    console.log(props)
        return (
            <div>
                <header>
                    <h2 className="page-title">Teams</h2>
                    <button className="btn btn-option">New</button>
                </header>
            <ul className="app-content">
                {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team} /></li>)}
            </ul>
            </div>
        );
}

export default Teams;