import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

import './App.css';

const ENDPOINT = "http://127.0.0.1:5000";


function App() {

  const [res, setRes] = useState("");

  // useEffect(() => {
  //   console.log("useEff CALLED")
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setRes(data);
  //   });
  // }, []);

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
