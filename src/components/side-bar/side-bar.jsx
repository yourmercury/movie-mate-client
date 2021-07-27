import React from 'react';
import './side-bar.css';
import Avatar from '../avatar/avatar';

function sideBar() {
    return (
        <div className="sideBar-container">
            <div className="sideBar-users">
                <div className="avatar-div">
                    <Avatar size={0} />
                </div>
                <div className="avatar-div">
                    <Avatar size={0} />
                </div>
                <div className="avatar-div">
                    <Avatar size={0} />
                </div>
                <div className="avatar-div">
                    <Avatar size={0} />
                </div>
                <div className="avatar-div">
                    <Avatar size={0} />
                </div>
            </div>


        </div>
    )
}

export default sideBar
