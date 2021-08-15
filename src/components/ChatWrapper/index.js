import React, { useState, useEffect, useRef, createRef } from 'react';
import { Route, useParams } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import { Modal, Input } from 'antd';
import Canvas from '../Canvas';
import { MESSAGE_TYPES } from '../../utils';

const ENDPOINT = 'http://127.0.0.1:5000';

const Loading = () => <p> Loading ...</p>;

const ChatWrapper = ({ user, setUser }) => {
  // console.log("User : ", user);
  const [inputModalOpen, setInputModalOpen] = useState(true);
  const [modalInput, setModalInput] = useState(user);

  let { room } = useParams();

  const denied = user.trim() === "";

  return (
    <Route>
      {denied ?
        (
          <Modal
            title="One musn't Proceed without a Username, or worst take someone else's."
            visible={inputModalOpen}
            onOk={() => setUser(modalInput)}
            onCancel={() => setInputModalOpen(false)}
          >
            <p>I command you to take another username</p>
            <Input
              placeholder="#BeWhatEverYouWantToBe"
              value={modalInput}
              onChange={(e) => setModalInput(e.target.value)}
            />
          </Modal>
        ) :
        <Chat
          user={user}
          room={room}
          setUser={setUser}
        />
      }
    </Route >
  );
}

const Chat = ({ user, room, setUser }) => {
  console.log("user : ", user);
  console.log("room : ", room);
  const [socketLoaded, setSocketLoaded] = useState(false);

  const socketRef = useRef(undefined);


  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);
    setSocketLoaded(true);
    const socket = socketRef.current;
    socket.emit(MESSAGE_TYPES.JOIN_ROOM, {
      userName: user,
      roomName: room
    })

    socket.on(MESSAGE_TYPES.ERROR, (data) => {
      // setUserNotf(data.text);
      alert(data.text);
      console.log("notification : ", data.text);
      setUser("");
    })

    socket.on(MESSAGE_TYPES.NOTIFICATION, (data) => {
      // setUserNotf(data.text);
      alert(data.text);
      console.log("notification : ", data.text);
    })

    // Cleanup 
    // return (() => {
    //   // socket.emit('disconnect');
    //   socket.off();
    // })
  }, [room, user, setUser])

  return (
    <>
      {socketLoaded ? (<Canvas socket={socketRef.current} />) : (<Loading />)}
    </>
  )
};


export default ChatWrapper;
