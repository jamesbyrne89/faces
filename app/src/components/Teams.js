import React, { Component } from "react";
import TeamCard from "./TeamCard";
import AddTeamButton from "./AddTeamButton";
import { ModalProvider, ModalConsumer } from "./Modal";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.createTeam = this.createTeam.bind(this);
  }

  createTeam() {
    this.props.modalHandler();
  }
  render() {
    return (
      <div>
        <div className="actions-bar">
          <ModalConsumer>
            {context => <AddTeamButton onClick={context.toggleModal} />}
          </ModalConsumer>
        </div>
        <ul className="app-content">
          {this.props.teams.map((team, i) => (
            <li key={i}>
              <TeamCard
                modalHandler={this.props.modalHandler}
                team={team.name}
                members={team.profiles}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Teams;
