import React, { Component } from 'react';
import ProfileCard from '../components/ProfileCard';
import '../styles.css';

const Team = props => {
    const { filterTeams, profiles } = props;
    console.log(filterTeams('Digital'))
        return (
            <div>
                <h2 className="page-title">Digital</h2>
            <ul className="app-content">
                {filterTeams('digital').map((item, i) => <li key={i}><ProfileCard modalHandler={props.modalHandler} profile={item} team={item} /></li>)}
            </ul>
            </div>
        );
}

export default Team;