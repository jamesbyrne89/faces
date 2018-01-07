import React, { Component } from 'react';
import Player from '../components/Player';




class AddPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            media: {
                available: null,
                src: '',
            }
        }
    }

    getVideo() {
        navigator.mediaDevices.getUserMedia({ audio: false, video: true })
            .then(stream => {
                /* use the stream */
                this.setState({
                    media: {
                        available: true,
                        src: window.URL.createObjectURL(stream)
                    }
                });
            })
            .catch(err => {
                /* handle the error */
                console.error(err)
                this.setState({
                    media: {
                        available: false,
                        src: ''
                    }
                })
            });
    }

    handleMediaError() {
        return this.state.media.available ? "" : < div className = "error" > No media detected < /div>;
    }

    render() {

        const errorMsg = this.handleMediaError();

        return ( <
            div className = "add-photo" >
            <
            Player className = 'player'
            src = { this.state.media.src }
            errorMsg = { errorMsg }
            /> <
            aside class = "add-photo__controls" > < /aside> <
            /
            div >
        );
    }
}

export default AddPhoto;