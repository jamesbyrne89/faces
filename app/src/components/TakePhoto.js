import React, { Component } from 'react';
import Player from './Player';



class TakePhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            media: {
                available: null,
                src: ''
            }
        }
        this.getVideo()
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
        return this.state.media.available ? "" : <div className="error"> No media detected </div>;
    }

    render() {
        const props = this.props;
        const errorMsg=this.handleMediaError();


        return (
            <div className="take-photo">
                <Player className='player'
                src={ this.state.media.src }
                errorMsg={ errorMsg }
                />
                <aside className="take-photo__controls">
                <button className="btn btn-navigation" onClick={() => props.handler(true, 'new_photo')}> Go Back <i className="fa fa-angle-right"> </i></button>
                    <div className="wrapper">
                        <button className="btn btn-option"> Take Photo <i className="fa fa-camera"> </i></button>
                        <button className="btn btn-option"> Save Photo <i className="fa fa-save"> </i></button>
                        <button className="btn btn-option"> Download <i className="fa fa-download"> </i></button>
                        <button className="btn btn-cancel"> Discard <i className="fa fa-trash"> </i></button>
                    </div>
                </aside>
            </div>
        );
    }
}

export default TakePhoto;