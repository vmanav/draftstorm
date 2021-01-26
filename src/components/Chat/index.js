import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import queryString from 'query-string';
import './index.css';

const ENDPOINT = 'http://127.0.0.1:5000';

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [wlcmMsg, setWlcmMsg] = useState("");
  const [userNotf, setUserNotf] = useState("");


  useEffect(() => {
    const { room, user } = queryString.parse(location.search);
    setRoom(room);
    setName(user);

    socket = socketIOClient(ENDPOINT);

    socket.emit('joinRoom', {
      userName: user,
      roomName: room
    }, () => {
    })

    // // cleanup
    // return (() => {
    //   socket.emit('disconnect');
    //   socket.off();
    // })

    // socket.emit('sendAll', {  msg: 'for all'})
  }, [location.search])

  useEffect(() => {
    socket.on('selfWelcome', (data) => {
      console.log("selfWelcome ka Data : ", data)
    })
  }, [wlcmMsg])

  useEffect(() => {
    socket.on('userNotification', (data) => {
      console.log("userNotification ka Data : ", data)
    })
  }, [userNotf])

  return (
    <h1>Chat</h1>
  );
}

export default Chat;
