import React, { Component } from 'react';



class TakePhoto extends Component {
 
    render() {
        const props = this.props;
        return (
            <div className="upload-photo">
                <h2 className="modal-title">Upload photo</h2>
                <button className="btn btn-navigation" onClick={() => props.handler(true, 'new_photo')}> Go Back <i className="fa fa-angle-right"> </i></button>
            </div>
        );
    }
}

export default TakePhoto;