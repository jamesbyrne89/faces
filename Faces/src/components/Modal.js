import React, { Component } from 'react';
import AddPhoto from '../Views/AddPhoto';



class Modal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < div className = "modal" >
            <
            i className = "modal-close-btn fa fa-times" > < /i> <
            AddPhoto / >
            <
            /div> );
        }
    }

    export default Modal;