import React, { useState, useEffect, useRef, createRef } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import queryString from 'query-string';
import Canvas from '../Canvas';

// import './index.css';

const ENDPOINT = 'http://127.0.0.1:5000';

let socket;

const Chat = ({ location, history, match }) => {
  // console.log("location : ", location);
  // console.log("history : ", history);
  // console.log("match : ", match);


  const [user, setName] = useState("");
  const [room, setRoom] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [wlcmMsg, setWlcmMsg] = useState("");
  const [userNotf, setUserNotf] = useState("");
  const [sktLoaded, setSktLoaded] = useState(false);


  useEffect(() => {
    // console.log("useEffect called");

    const { room, user } = queryString.parse(location.search);
    setRoom(room);
    setName(user);

    socket = socketIOClient(ENDPOINT);
    setSktLoaded(true);

    socket.emit('joinRoom', {
      userName: user,
      roomName: room
    }, (err) => {
      if (err) {

        // STILL PROBLEM WITH REDURECT
        // alert(err);
        // console.log("REDIRECT NOW ?");
        setRedirect(true);
      }
    })

    // // cleanup
    return (() => {
      // socket.emit('disconnect');
      socket.off();
    })

    // socket.emit('sendAll', {  msg: 'for all'})
  }, [match.action, location.search])


  useEffect(() => {
    socket.on('selfWelcome', (data) => {
      setWlcmMsg(data.text);
      // alert(data.text);
      // console.log("selfWelcome : ", data.text);
    })
  }, [wlcmMsg])

  useEffect(() => {
    socket.on('userNotification', (data) => {
      setUserNotf(data.text);
      // alert(data.text);
      // console.log("userNotification : ", data.text);
    })
  }, [userNotf])

  if (redirect) {
    // console.log("redirect to true hai")
    return (<Redirect to="/hi" />);
  } else {
    return (
      <>
        {/* <h1>Chat</h1> */}
        {sktLoaded ?
          (<Canvas socket={socket} />)
          :
          (<>NO CANVAS</>)}
      </>
    )
  }
}

export default Chat;
