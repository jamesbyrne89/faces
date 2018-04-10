import React, { Fragment } from 'react';
import TeamCard from './TeamCard';
import AddTeamButton from './AddTeamButton';



const Teams = props => {
    console.log(props)
    return (
        <div>
            <div className="actions-bar">
                <AddTeamButton />
            </div>
            <ul className="app-content">
                {props.teams.map((team, i) => <li key={i}>
                                                <TeamCard
                                                    modalHandler={props.modalHandler}
                                                    team={team.name}
                                                    members={team.profiles}
                                                /></li>)}
            </ul>
        </div>
    
    );
}

export default Teams;