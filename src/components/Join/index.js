import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Layout, Row, Col, Input, Space, Form } from "antd";
import "antd/dist/antd.less";
import background from "../../bg.png";

const { Header, Footer, Sider, Content, Breadcrumb, Divider, Button } = Layout;

var bgImgStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
};

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleClick = (e) => {
    if (name === "" || room === "") {
      e.preventDefault();
    }
  };

  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };

  return (
    // style={bgImgStyle}
    <div>
      <Layout style={{ backgroundColor: "transparent" }}>
        <Content
          className="site-layout-background"
          style={{
            textAlign: "center",
            height: "100vh",
            // padding: 24,
            backgroundColor: "transparent",
          }}
        >
          <Row
            justify="center"
            style={{
              height: "100vh",
            }}
          >
            <Col
              span={10}
              style={{
                backgroundColor: "#1e1e1e",
                height: "100%",
                padding: 35,
                // paddingRight: 0,
              }}
            >
              <Content
                style={{
                  backgroundColor: "white",
                  // borderRadius: 5,
                  height: "100%",
                }}
              >
                <Space>
                  <Input placeholder="Name" />
                </Space>

                <Space>
                  <Input placeholder="Basic usage" />
                </Space>
              </Content>
            </Col>
            <Col
              span={14}
              style={{
                backgroundColor: "white",
                height: "100%",
                padding: 35,
                paddingLeft: 0,
              }}
            >
              <Content
                style={{
                  // borderRadius: 5,
                  backgroundColor: "#1e1e1e",
                  height: "100%",
                  // backgroundImage
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  // backgroundSize: "100% 100%",
                  backgroundSize: "contain",
                }}
              >
                askdhahjkd
              </Content>
            </Col>
          </Row>
          {/* <Footer >Ant Design ©2018 Created by Ant UED</Footer> */}
        </Content>
      </Layout>
    </div>
  );
};

export default Join;
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
