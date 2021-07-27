import React from 'react';
import './screen.css';

function screen() {
    return (
        <div className="screen-container">
            <video src="" className="screen-video"></video>
            {/* https://cdn.glitch.com/8f787759-d0f2-4492-b61d-946c8bf47303%2FPip%20-%20A%20Short%20Animated%20Film.mp4?v=1603914053922 */}
        
            <div className="screen-controls">
                <button>SYNCHED</button>

                <div className="progress-bar">
                    <i class="fas fa-pause play-pause"></i>

                    <div className="outer-progress">
                        <div className="inner-progress"></div>
                    </div>

                    <div className="time">
                        <span className="time-gone">00:00</span>
                         / 
                        <span className="time-total">00:00</span>
                    </div>
                </div>

                <i class="fas fa-volume-mute mute"></i>
                <i class="fas fa-expand"></i>
            </div>
        </div>
    )
}

export default screen
