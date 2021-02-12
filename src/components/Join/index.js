import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Row, Col, Input, Space, Form } from 'antd';
import 'antd/dist/antd.less';
import background from "../../bg.png";

const { Header, Footer, Sider, Content, Breadcrumb, Divider, Button } = Layout;


var bgImgStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'right bottom'
};

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleClick = (e) => {
    if (name === "" || room === "") {
      e.preventDefault();
    }
  }

  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };


  return (

    <div style={bgImgStyle}>

      <Layout style={{ backgroundColor: "transparent" }} >

        <Content
          className="site-layout-background"
          // style={{
          //   margin: '24px 16px',
          //   padding: 24,
          //   minHeight: 280,
          // }}
          style={{
            textAlign: 'center',
            height: '100vh',
            padding: 24,
          }}
        >
          {/* <Row justify="center">
            <Col span={12} style={{
              backgroundColor: 'lightcoral'
            }}>

              <Space>
                <Input placeholder="Name" />
              </Space>

              <Space>
                <Input placeholder="Basic usage" />
              </Space>

            </Col>
            <Col span={12} style={{
              backgroundColor: 'lightgreen'
            }}>col-4</Col>
          </Row>
          <Footer >Ant Design ©2018 Created by Ant UED</Footer> */}
        </Content>
      </Layout >
    </div>
    // <div className="outerContainer">
    //   <div className="innerContainer">
    //     <h1>Join</h1>
    //     <div>
    //       <input type="text" placeholder="Name" className="nameInput" onChange={(e) => setName(e.target.value)} />
    //     </div>
    //     <div>
    //       <input type="text" placeholder="Room" className="roomInput" onChange={(e) => setRoom(e.target.value)} />
    //     </div>
    //     <Link onClick={(e) => handleClick(e)} to={`/ chat ? room = ${ room }& user=${ name } `}>
    //       <button className="button mt-20" type="submit">Sign In</button>
    //     </Link>
    //   </div>
    // </div >
  );
}

export default Join;
