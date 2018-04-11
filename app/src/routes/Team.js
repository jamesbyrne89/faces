import React from 'react';
import ProfileCard from '../components/ProfileCard';

const Team = props => {
    console.log(props)
    const { match } = props;
    const teamMembers = (props.filterTeams(match.params.name))[0].profiles;
    console.log(teamMembers)
        return (
            <div>
                <h2 className="page-title">{props.match.params.name}</h2>
            <ul className="app-content">
                {teamMembers.map((item, i) => <li key={i}><ProfileCard modalHandler={props.modalHandler} profile={item} team={item} /></li>)}
            </ul>
            </div>
        );
}

export default Team;