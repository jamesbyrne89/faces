import React, { Component } from 'react';
import Player from '../components/Player';



class NewPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            media: {
                available: null,
                src: ''
            }
        }
        console.log(this.props)
    }

    handleMediaError() {
        return this.state.media.available ? "" : < div className = "error" > No media detected < /div>;
    }



    render() {

        const errorMsg = this.handleMediaError();

        return (
            <div className = "add-photo" >
                        <h2 className="modal-title">Change photo</h2>
                        <button className="btn btn-option">Upload from Device<i className="fa fa-upload"></i></button>
                        <button className="btn btn-option"
                        onClick={() => this.props.handler(true, 'take_photo')}
                        >
                        Take Using Webcam
                        <i className="fa fa-camera"></i>
                        </button>
            </div>
        );
    }
}

export default NewPhoto;