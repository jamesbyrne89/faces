import React, { Component } from 'react';
import Header from '../components/Header';
import SiteHead from '../components/Head';


const Teams = props => {
    console.log(props)
    return (
        <div>
            <SiteHead title={'Teams'} />
            <div>
                <Header />
                <ul className="app-content">
                    {/* {props.teams.map((team, i) => <li key={i}><TeamCard modalHandler={props.modalHandler} team={team.name} members={team.profiles} /></li>)} */}
                </ul>
            </div>
        </div>
    );
}

export default Teams;