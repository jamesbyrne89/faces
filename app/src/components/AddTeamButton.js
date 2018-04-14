import React from "react";
import { ModalConsumer } from "./Modal";

const AddTeamButton = props => {
  return (
    <ModalConsumer>
      {context => (
        <button onClick={context} className="btn intent-add add-team">
          + <span>Create Team</span>
        </button>
      )}
    </ModalConsumer>
  );
};

export default AddTeamButton;
