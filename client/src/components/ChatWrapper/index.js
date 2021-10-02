import React, { useState, useEffect, useRef } from 'react';
import { Route, useParams } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import { Input, Modal, Skeleton } from 'antd';
import { MESSAGE_CLASSES, MESSAGE_TYPES, } from '../../utils';
import { ToastContainer, toast } from 'react-toastify';
import Canvas from '../Canvas';

const LoadingSkeleton = () => <Skeleton paragraph={{ rows: 4 }} />

const sendNotifications = (text, type) => {
  const notificationParams = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (type) {
    case MESSAGE_CLASSES.RED_FLAG:
      toast.error(text, notificationParams);
      break;
    case MESSAGE_CLASSES.GREEN_FLAG:
      toast.success(text, notificationParams);
      break;
    default:
      toast.success(text, notificationParams);
      break;
  }
}

const ChatWrapper = ({ user, setUser }) => {
  const [modalInput, setModalInput] = useState(user);

  let { room } = useParams();

  const denied = user.trim() === "";

  return (
    <div className="chat-wrapper">
      <Route>
        {denied ?
          (
            <Modal
              title="One musn't Proceed without a Username, or worst take someone else's."
              visible={true}
              onOk={() => setUser(modalInput)}
              cancelButtonProps={{ disabled: true }}
              className="chat-wrapper__modal"
              closable={false}
              centered
            >
              <p className="chat-wrapper__modal-title">
                <b>I command you to take another username!</b>
              </p>
              <Input
                placeholder="#BeWhomSoEverYouWantToBe"
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
      <ToastContainer />
    </div>
  );
}

const Chat = ({ user, room, setUser }) => {
  console.log("user : ", user);
  console.log("room : ", room);
  const [socketLoaded, setSocketLoaded] = useState(false);

  const socketRef = useRef(undefined);

  useEffect(() => {
    socketRef.current = socketIOClient('/');
    setSocketLoaded(true);
    const socket = socketRef.current;
    socket.emit(MESSAGE_TYPES.JOIN_ROOM, {
      userName: user,
      roomName: room
    })

    socket.on(MESSAGE_TYPES.ERROR, (data) => {
      sendNotifications(data.text, data.type);
    })

    socket.on(MESSAGE_TYPES.NOTIFICATION, (data) => {
      sendNotifications(data.text, data.type);
    })

    return (() => {
      socket.off();
    })
  }, [room, user, setUser])

  return (
    <>
      {socketLoaded ? (<Canvas socket={socketRef.current} />) : (<LoadingSkeleton />)}
    </>
  )
};

export default ChatWrapper;
