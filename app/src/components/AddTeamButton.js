import React from "react";
import { ModalConsumer } from "./Modal";

export const AddTeamButton = props => {
  return (
    <ModalConsumer>
      {context => (
        <button
          onClick={() => {
            context.toggleModal();
            context.showContent("add-team");
          }}
          className="btn intent-add add-team"
        >
          + <span>Create Team</span>
        </button>
      )}
    </ModalConsumer>
  );
};

export const AddTeamForm = props => {
  return (
    <div>
      <h2>New Team</h2>
      <label>Team Name</label>
      <input type="text" name="newTeamName" placeholder="E.g. 'My team'" />
    </div>
  );
};
