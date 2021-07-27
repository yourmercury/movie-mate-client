import React, { Component } from 'react';
import SideBar from "../../components/side-bar/side-bar";
import './movie-room.css';
import LiveChat from '../../components/live-chat/live-chat';
import Screen from '../../components/screen/screen';

export default class movieRoom extends Component {
    render() {
        return (
            <div className="movieRoom-container">
                <SideBar />
                <div className="movie-body">

                    <div className="movie-nav">
                        <div className="link-input-div">
                            <input type="text" placeholder="Enter movie link..." />
                            <button>Load movie</button>
                        </div>
                    </div>

                    <div className="movie-middle">
                        <Screen />
                        <LiveChat />
                    </div>

                    <div className="movie-bottom">
                        <button className="first-btn">Re-sync</button>
                        <button className="second-btn"><abbr title="Leave the Syncing">Unsync</abbr></button>
                        <button className="third-btn">Exit</button>
                        <button className="fourth-btn">Leave Room</button>
                    </div>

                    <div className="voice-comm-div">
                        <div className="voice-parlor">
                            <div className="voice-avatar">

                            </div>
                        </div>

                        <div className="voice-button">
                            <button>
                                Hold to speak
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
