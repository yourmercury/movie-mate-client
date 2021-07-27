import React from 'react';
import { css } from '@emotion/css';
import "./live-chat.css";

function liveChat(prop) {
    return (
        <div className="liveChat-container">
            <div className="chat-head">
                <h1>Live Chat</h1>

                <p><i className="fas fa-users"></i> <span>4 people</span></p>
            </div>

            <div className="chat-body">
                {prop.children}
            </div>

            <div className="chat-input-div">
                <div className="chat-options">
                    <i className="fas fa-ellipsis-h"></i>
                </div>

                <input type="text" className="chat-input" placeholder="Write your message" />
                
                <div className="chat-send">
                    <i className="fas fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default liveChat;