import React, { Component } from 'react';



const TeamCard = (props) => {
    return (  
    <div className="profile-card">
        <span className="profile-card__name"> { props.profile.name } </span>
        <span className="profile-card__title"> { props.profile.title } </span>
        <span className = "profile-card__email" > { props.profile.email } </span>
    </div>
    );
}

export default TeamCard;