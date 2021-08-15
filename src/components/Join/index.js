import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Typography } from 'antd';
import {
  Layout, Row, Col, Input, Space, Form, Divider, Button
} from "antd";
import {
  CaretRightOutlined
} from '@ant-design/icons';
import "antd/dist/antd.less";
import background from "../../bg.png";

const { Title } = Typography;
const { Content, } = Layout;
var bgImgStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
};

const Join = ({ userName, setUser }) => {
  const [roomName, setRoomName] = useState("endgame");
  const [roomsList, setRoomsList] = useState([]);

  console.log("userName : ", userName);

  const getListOfRooms = () => fetch('http://localhost:5000/rooms')
    .then(data => data.json())
    .then(data => {
      setRoomsList(data.rooms)
    })

  useEffect(() => {
    const rooms = getListOfRooms();
    console.log("Rooms : ", rooms);
  }, [])

  const handleClick = (e) => {
    if (userName.trim() === "" || roomName.trim() === "") {
      e.preventDefault();
      alert("Error : Empty Username");
    }
  };

  return (
    <div className="join-container">
      <Row>
        <Col className="join-container__first" span={18}>
          col-12
        </Col>
        <Col className="join-container__second" span={6}>
          <div className="input-container">
            <Title
              className="input-container__heading"
              level={3}
            >
              Start Drafting Now!
            </Title>
            <Input
              placeholder="Name"
              className="input-container__element"
              value={userName}
              onChange={(e) => setUser(e.target.value)}
            />
            <Input
              placeholder="Basic usage"
              className="input-container__element"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <Link className="input-container__element" to={`/chat/${roomName}`}>
              <Button type="primary" shape="round" size='large' onClick={handleClick}>
                Join Room <CaretRightOutlined />
              </Button>
              {/* <button className="button" type="submit">Start Drafting In</button> */}
            </Link>
          </div>
        </Col>
      </Row>
    </div >
    //   <>
    //     <div>
    //       <Space>
    //         <Input
    //           placeholder="Name"
    //           value={userName}
    //           onChange={(e) => setUser(e.target.value)}
    //         />
    //       </Space>
    //       <Space>
    //         <Input placeholder="Basic usage"
    //           value={roomName}
    //           onChange={(e) => setRoomName(e.target.value)}
    //         />
    //       </Space>
    //       <Link to={`/chat/${roomName}`}>
    //         <button className="button mt-20" type="submit">Start Drafting In</button>
    //       </Link>
    //     </div>
    //     <div>
    //       {roomsList.map((roomName) => <p>`${roomName}`</p>)}
    //       {roomsList.length === 0 ? 'No Rooms at Present' : ''}
    //     </div>
    //   </>
    // 
  );
};

export default Join;
