import React, { Component } from 'react';



const TeamCard = (props) => {
    console.log(props)
    return (  
    <div className="profile-card">
        <span className="profile-card__name">{ props.team }</span>
    </div>
    );
}

export default TeamCard;