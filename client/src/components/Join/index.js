import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { Button, Col, Input, Row } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';

const Join = ({ userName, setUser }) => {
  const [roomName, setRoomName] = useState("endgame");
  // const [roomsList, setRoomsList] = useState([]);
  // const getListOfRooms = () => fetch('http://localhost:5000/rooms')
  //   .then(data => data.json())
  //   .then(data => {
  //     setRoomsList(data.rooms)
  //   })
  // useEffect(() => {
  //   const rooms = getListOfRooms();
  //   console.log("Rooms : ", rooms);
  // }, [])

  const handleClick = (e) => {
    if (userName.trim() === "" || roomName.trim() === "") {
      e.preventDefault();
      toast.error('Username/ Roomname can\'t be empty.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <div className="join-container">
        <Row className="join-container__body">
          <Col className="join-container__first" span={14} offset={5}>
            <div className="heading-container">
              <div className="heading-container__heading">
                DraftStorm
              </div>
              <div>
                <hr className="heading-container__divider" />
              </div>
              <div className="heading-container__subheading">
                Drafting Daily
              </div>
            </div>
            <Row justify="center" className="input-container">
              <Col span={5}>
                <Input
                  placeholder="Name"
                  className="input-container__element"
                  value={userName}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Col>
              <Col span={5} offset={1}>
                <Input
                  placeholder="Basic usage"
                  className="input-container__element"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
              </Col>
            </Row>
            <Link to={`/chat/${roomName}`}>
              <Button
                type="primary"
                shape="round"
                size='large'
                onClick={handleClick}
                className="input-container__button"
              >
                Join Room <CaretRightOutlined />
              </Button>
            </Link>
            <Footer />
          </Col>
        </Row>
      </div>
      {/* TBD */}
      {/* <div>
        {roomsList.map((roomName) => <p>`${roomName}`</p>)}
        {roomsList.length === 0 ? 'No Rooms at Present' : ''}
      </div> */}
      <ToastContainer />
    </>
  );
};

export default Join;
