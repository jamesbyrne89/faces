import React, { Component } from 'react';
import ProfileCard from '../components/ProfileCard';
import '../styles.css';

const Team = props => {
    console.log(props)
        return (
            <div>  
                <h2 className="page-title">Digital</h2> 
                <ul>
                    {props.profiles.map((item, i) => <li key={i}><ProfileCard modalHandler={props.modalHandler} profile={item} /></li>)}
                </ul>
            </div>
        );
}

export default Team;