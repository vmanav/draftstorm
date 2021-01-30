import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Card, Menu, Dropdown, Typography, Radio, Button, Select, Divider, Space } from 'antd';
import { ToolOutlined, UserOutlined } from '@ant-design/icons';
const { Option } = Select;

const gridStyle = {
  width: '100%',
  textAlign: 'center',
};

function handleChange(value) {
  console.log(`selected ${value}`);
}


const ToolKit = (props) => {

  const { setStrokeColour } = props;
  console.log("setStrokeColour : ", setStrokeColour);

  const [vis, setVis] = useState(false);


  const handleStrokeColourChange = (value) => {

    // console.log("Changed : ", value);
    setStrokeColour(value);
  }


  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <Card
        size="small"
        title="DraftStorm"
        hoverable={true}
        extra={
          <Button
            type="primary"
            shape="circle"
            icon={<ToolOutlined />}
            onClick={() => setVis(!vis)}
          />
        }
        style={{ width: 140, borderRadius: 4, position: "absolute", top: 20, left: 15 }}
        className="handle"
      >
        {/*
        <Space>
          <Select
            defaultValue="lucy"
            style={{
              width: 120
            }}
            onChange={handleChange}
            dropdownAlign={{
              offset: [+120, -32]
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Divider />
        </Space>
        */}

        <Space>
          <Select
            defaultValue="#141414"
            style={{
              width: 120
            }}
            onChange={handleStrokeColourChange}
            dropdownAlign={{
              offset: [+120, -32]
            }}
          >
            <Option value="#ef233c">
              <Button shape="circle" size="small" style={{ backgroundColor: "#ef233c", color: "#ef233c", border: 0 }}>.</Button>
            </Option>
            <Option value="#56cbf9">
              <Button shape="circle" size="small" style={{ backgroundColor: "#56cbf9", color: "#56cbf9", border: 0 }}>.</Button>
            </Option>
            <Option value="#13c4a3">
              <Button shape="circle" size="small" style={{ backgroundColor: "#13c4a3", color: "#13c4a3", border: 0 }}>.</Button>
            </Option>
            <Option value="#fde74c">
              <Button shape="circle" size="small" style={{ backgroundColor: "#fde74c", color: "#fde74c", border: 0 }}>.</Button>
            </Option>
            <Option value="#ffffff">
              <Button shape="circle" size="small" style={{ backgroundColor: "#ffffff", color: "#ffffff", border: 0 }}>.</Button>
            </Option>
            <Option value="#141414">
              <Button shape="circle" size="small" style={{ backgroundColor: "#141414", color: "#141414", border: 0 }}>.</Button>
            </Option>
          </Select>
          <Divider />
        </Space>

        <p>Card content</p>
      </Card>

    </Draggable >
  );
}

export default ToolKit;

// {/* <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
//           <Radio.Button value="a">Hangzhou</Radio.Button>
//           <Radio.Button value="b">Shanghai</Radio.Button>
//           <Radio.Button value="c">Beijing</Radio.Button>
//           <Radio.Button value="d">Chengdu</Radio.Button>
//         </Radio.Group> */}

// {/* 



// {/* <Dropdown.Button
//         visible={true}
//         className="handle"
//         overlay={Tools}
//         placement="bottomCenter"
//         icon={<UserOutlined />}
//         style={{ position: "absolute", top: 20, left: 15 }}
//       >
//         Dropdown
//       </Dropdown.Button> */}

// {/* <div
// // style={{ position: "absolute", zIndex: 1 }}
// >
//   <div className="handle" style={{ backgroundColor: "lightcoral" }}>Drag from here</div>
//   <div>This readme is really dragging on...</div>
// </div> */
// }