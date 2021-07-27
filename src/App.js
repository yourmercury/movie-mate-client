import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LiveChat from './components/live-chat/live-chat';
import Avatar from './components/avatar/avatar';
import SideBar from './components/side-bar/side-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LiveChat>
          <Avatar size={0}/>
        </LiveChat> */}

        <SideBar />
      </div>
    );
  }
}

export default App;
