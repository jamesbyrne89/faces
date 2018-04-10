import React, { Fragment, Component } from 'react';
import TeamCard from './TeamCard';
import AddTeamButton from './AddTeamButton';



class Teams extends Component {
    constructor(props) {
        super(props)
        this.createTeam = this.createTeam.bind(this);
    }

    createTeam() {
        this.props.modalHandler();
    }
render() {
    return (
        <div>
            <div className="actions-bar">
                <AddTeamButton onClick={this.props.modalHandler}/>
            </div>
            <ul className="app-content">
                {this.props.teams.map((team, i) => <li key={i}>
                                                <TeamCard
                                                    modalHandler={this.props.modalHandler}
                                                    team={team.name}
                                                    members={team.profiles}
                                                /></li>)}
            </ul>
        </div>
    
    );
}
}

export default Teams;