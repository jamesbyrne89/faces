import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


const TeamCard = (props) => {
    const { team, members } = props
    return (  
    <div className="team-card">
        <span className="team-card__name">{ team }</span>
        <span className="team-card__size-num">{ members.length }<p>{(members.length === 1 ? 'member': 'members')}</p></span>
        <Link to={{pathname: "/teams/" + team.toLowerCase(),
    name: team}} team={props.team}><button className="btn">View ></button></Link>
    </div>
    );
}

export default TeamCard;