import React, { Component } from 'react';
import TakePhoto from '../views/TakePhoto';



const Player = (props) => {
    return (
        <div className="canvas-wrap">
            <canvas width="640"
            height="480"
            className="photo"> </canvas> { props.errorMsg }
            <video className="player"
            src={ props.src }>
            </video>
        </div>
    );
}

export default Player;