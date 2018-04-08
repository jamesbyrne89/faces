import React from 'react';
import Header from './Header';
import TeamCard from './TeamCard';


const Teams = props => {
    console.log(props)
    return (

                <ul className="app-content">
                    {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team.name} members={team.profiles} /></li>)}
                </ul>
    
    );
}

export default Teams;