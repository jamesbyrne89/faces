import React, { Component } from 'react';
import NewPhoto from '../views/NewPhoto';



const ProfileCard = (props) => {
    console.log(props)
    return ( <div className = "profile-card" >
        <picture className = "profile-card__photo" >
        <img className = "profile-card__img"
        src = { props.profile.photo }
        /> <i className = "change-photo-icon fa fa-camera"
        profileToUpdate = { props.profile }
        onClick = {
            () => props.modalHandler(true, "new_photo") } > < /i> </picture>

        <span className = "profile-card__name" > { props.profile.name } </span> <span className = "profile-card__title" > { props.profile.title } </span> <span className = "profile-card__email" > { props.profile.email } </span> </div>
    );
}

export default ProfileCard;