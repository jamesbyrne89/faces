import React, { Component } from "react";
import NewPhoto from "./NewPhoto";
import TakePhoto from "./TakePhoto";
import UploadPhoto from "./UploadPhoto";

export const ModalContext = React.createContext();
export const ModalConsumer = ModalContext.Consumer;
export const ModalProvider = ModalContext.Provider;

// export class ModalProvider extends Component {
//   constructor() {
//     super();
//     this.state = {
//       modalIsOpen: false
//     };
//     this.toggleModal = this.toggleModal.bind(this);
//   }

//   toggleModal() {
//     this.setState(prevState => {
//       modalIsOpen: !prevState.modalIsOpen;
//     });
//   }

//   render() {
//     return (

//     );
//   }
// }

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderModal() {
    return (
      <div className="modal-wrap">
        <div
          className="modal-bg"
          // onClick={() => this.props.handler(false, null)}
        />
        <div className="modal">
          <button className="btn modal-close-btn" onClick={this.toggleModal}>
            <i className="fa fa-times" />X
          </button>
          {/* {this.props.children} */}
        </div>
      </div>
    );
  }

  render() {
    return (
      <ModalContext.Provider
        value={{
          toggleModal: this.toggleModal,
          state: this.state
        }}
      >
        {this.state.isOpen && this.renderModal()}
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default Modal;
