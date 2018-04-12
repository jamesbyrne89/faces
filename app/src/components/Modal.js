import React, { Component } from 'react';
import NewPhoto from './NewPhoto';
import TakePhoto from './TakePhoto';
import UploadPhoto from './UploadPhoto';


export const ModalContext = React.createContext();
export const ModalConsumer = ModalContext.Consumer;

export class ModalProvider extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <ModalContext.Provider
                value={{
                    toggleModal: this.toggleModal,
                    state: this.state
                }}
            >
                {this.props.children}
            </ModalContext.Provider>
        )
    }
}


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isOpen: false
        }
    }


    render() {

        return (
            <ModalProvider>
                <ModalConsumer>
                    {context => (
                        context ? (
                        <div className="modal-wrap">
                            <div className="modal-bg"
                                onClick={() => this.props.handler(false, null)}>
                            </div>
                            <div className="modal" >
                                <button className="btn modal-close-btn"
                                    onClick={() => this.props.handler(false, null)} >
                                    <i className="fa fa-times"></i>
                                </button>
                                {this.props.children}
                            </div>
                        </div>
                        )
                        : null
                    )}
                </ModalConsumer>
            </ModalProvider>
        );
    }

}

export default Modal;