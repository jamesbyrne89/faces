import React, { Component } from 'react';
import Player from '../components/Player';



class NewPhoto extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            profileToAffect: null
        }
    }

    setProfile() {
        this.setState({
            profileToAffect: this.props.profileToChange
        })
    }

    render() {

        return (
            <div className = "add-photo" >
                        <h2 className="modal-title">Change photo</h2>
                        <button className="btn btn-option"
                        onClick={() => this.props.handler(true, 'upload_photo')}
                        >Upload from Device<i className="fa fa-upload"></i></button>
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