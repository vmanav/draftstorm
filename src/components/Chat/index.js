import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import queryString from 'query-string';
import './index.css';

const ENDPOINT = 'http://127.0.0.1:5000';

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {

    const { room, user } = queryString.parse(location.search);

    socket = socketIOClient(ENDPOINT);

    setRoom(room);
    setName(user);


    socket.emit('joinRoom', {
      userName: user,
      roomName: room
    })

    return (() => {
      socket.emit('disconnect');
      socket.off();
    })

    // socket.emit('sendAll', {
    //   msg: 'for all'
    // })

    // socket.on('tPortAll', (data) => {
    //   console.log("CLIENT KO MILA : ", data);
    // })
  }, [location.search])

  return (
    <h1>Chat</h1>
  );
}

export default Chat;
