import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import './App.css';

const ENDPOINT = "http://127.0.0.1:5000";

function App() {

  const [res, setRes] = useState("");

  useEffect(() => {
    console.log("useEff CALLED")
    const socket = socketIOClient(ENDPOINT,
    //    {
    //   withCredentials: true,
    // }
    );
    socket.on("FromAPI", data => {
      setRes(data);
    });
  }, []);

  return (<p>It's <time dateTime={res}>{res}</time></p>);
}

export default App;
