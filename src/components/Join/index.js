import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Typography } from 'antd';
import {
  Button, Col, Input, Row, Space,
} from "antd";
import {
  CaretRightOutlined, GithubFilled, LinkedinFilled,
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.less";

const { Title } = Typography;

const Footer = () => {
  const socials = [
    { name: 'github', link: 'https://github.com/vmanav', component: <GithubFilled /> },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/vmanav', component: <LinkedinFilled /> },
  ]
  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );

  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  return (
    <div className="footer">
      Coded with  <HeartIcon style={{ fontSize: '1.2rem', color: '#ef233c' }} /> by Manav Verma.&nbsp;
      <Space>
        {
          socials.map((social) => (
            <Button
              name={social.name}
              icon={social.component}
              type="primary"
              size='middle'
              href={social.link}
              target="_blank"
            />
          ))
        }
      </Space>
    </div>
  )

}

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
          <Col className="join-container__first" span={18}>
            <span className="main-container main-container__upper">
              Welcome To.
            </span>
            <span className="main-container main-container__lower">
              &nbsp;DraftStorm&nbsp;
            </span>
            <div className="main-container">
              Drafting Made Easy
            </div>
            <Footer />
          </Col>
          <Col className="join-container__second" span={6}>
            <div className="input-container">
              <Title
                className="input-container__heading"
                level={3}
              >
                Start
                <span
                  className="input-container__heading input-container__heading--styled"
                >Drafting</span>
                Now!
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
              <Link className="input-container__button" to={`/chat/${roomName}`}>
                <Button
                  type="primary"
                  shape="round"
                  size='large'
                  onClick={handleClick}
                  className="join-button"
                >
                  | Join Room <CaretRightOutlined /> |
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {roomsList.map((roomName) => <p>`${roomName}`</p>)}
        {roomsList.length === 0 ? 'No Rooms at Present' : ''}
      </div>
      <ToastContainer />
    </>
  );
};

export default Join;
