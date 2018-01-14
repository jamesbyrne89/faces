import React, { Component } from 'react';
import TeamCard from '../components/TeamCard';
import '../styles.css';


const Teams = props => {
        return (
            <div>
                <h2 className="page-title">Teams</h2>
            <ul className="app-content">
                {props.profiles.map((item, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} profile={item} /></li>)}
            </ul>
            </div>
        );
}

export default Teams;