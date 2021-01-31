import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Card, Menu, Dropdown, Typography, Radio, Button, Select, Divider, Space, Slider, InputNumber, Switch, Tooltip } from 'antd';
import { ToolOutlined, UserOutlined } from '@ant-design/icons';
import { FaDotCircle, FaEraser } from "react-icons/fa";

import 'antd/dist/antd.less';

const { Option } = Select;

const ToolKit = (props) => {

  const { setStrokeColour, setLineWidth, setShadowBlur, setEraserSelected, } = props;
  const [vis, setVis] = useState(false);
  const [eraserButton, setEraserButton] = useState(false);


  const handleEraserSelect = (value) => {
    if (eraserButton) {
      setEraserSelected(false);
    } else {
      setEraserSelected(true);
    }
    setEraserButton(!eraserButton);
  }

  const handleStrokeColourChange = (value) => {
    // console.log("Changed : ", value);
    setStrokeColour(value);
  }

  const handleLineWidthChange = (value) => {
    // console.log("Changed : ", value);
    setLineWidth(value);
  }

  const onHighlightChange = (value) => {
    // console.log("Changed : ", value);
    setShadowBlur(value);
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

            onClick={() => setVis(!vis)}
          >
            <ToolOutlined />
          </Button>
        }
        style={{ width: 140, borderRadius: 4, position: "absolute", top: 20, left: 15 }}
        className="handle"
      >

        {/* StrokeColour */}
        <Space>
          <Tooltip placement="topRight" title={'Colour'}>
            <Select
              defaultValue="#141414"
              style={{
                width: 100
              }}
              onChange={handleStrokeColourChange}
              dropdownAlign={{
                offset: [+100, -32]
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
              <Option value="#6c757d">
                <Button shape="circle" size="small" style={{ backgroundColor: "#6c757d", color: "#6c757d", border: 0 }}>.</Button>
              </Option>
              <Option value="#141414">
                <Button shape="circle" size="small" style={{ backgroundColor: "#141414", color: "#141414", border: 0 }}>.</Button>
              </Option>
            </Select>
          </Tooltip>
          <Divider />
        </Space>

        {/* lineWidth */}
        <Space>
          <Tooltip placement="topRight" title={'Size'}>
            <InputNumber min={1} max={10} defaultValue={1} onChange={handleLineWidthChange} />
          </Tooltip>
          <Divider />
        </Space>

        <Space>
          <Tooltip placement="topRight" title={'Hightlight'}>
            <Switch onChange={onHighlightChange} size="small" />
          </Tooltip>
          <Divider />
        </Space>

        <Space>
          <Tooltip placement="right" title="Eraser">
            {eraserButton ? (
              <Button shape="circle" type="primary" onClick={handleEraserSelect} >
                <FaEraser />
              </Button>
            ) : (
                <Button shape="circle" type="primary" onClick={handleEraserSelect} ghost>
                  <FaEraser />
                </Button>
              )}


          </Tooltip>
          <Divider />
        </Space>

        <p>Card content</p>
      </Card>

    </Draggable >
  );
}

export default ToolKit;