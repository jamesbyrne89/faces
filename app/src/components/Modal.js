import React, { Component } from 'react';
import NewPhoto from './NewPhoto';
import TakePhoto from './TakePhoto';
import UploadPhoto from './UploadPhoto';


const ModalContext = React.createContext();


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    


    renderContent() {
        if (this.props.content === 'new_photo') {
            return <NewPhoto handler={ this.props.handler }
            />
        } else if (this.props.content === 'take_photo') {
            return <TakePhoto handler={ this.props.handler }
            />
        } else if (this.props.content === 'upload_photo') {
            return <UploadPhoto handler={ this.props.handler }
            />
        } else {
            return null
        }
    }

    render() {
        if (this.props.modalIsOpen) {
            return (
            <div className="modal-wrap">
                <div className="modal-bg"
                    onClick={() => this.props.handler(false, null) }>
                </div>
                <div className="modal" >
                    <button className="btn modal-close-btn"
                            onClick={() => this.props.handler(false, null) } >
                        <i className="fa fa-times"></i>
                    </button>
                    { this.renderContent() }
                </div>
            </div>
            );
        } else { return null }
    }
}

export default Modal ;