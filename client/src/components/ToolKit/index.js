import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Card, Button, Select, Divider, Space, InputNumber, Switch, Tooltip } from 'antd';
import { ClearOutlined, DownloadOutlined } from '@ant-design/icons';
import { FaEraser } from "react-icons/fa";
import ToolToogleButton from '../ToolToggleButton/index';

const hiddenClass = {
  display: "none"
}

const { Option } = Select;

const ToolKit = (props) => {

  const { setStrokeColour, setLineWidth, setShadowBlur, setEraserSelected, clearCanvas, downloadCanvasAsImage } = props;
  const [vis, setVis] = useState(false);
  const [eraserButton, setEraserButton] = useState(false);


  const handleEraserSelect = () => {

    if (eraserButton) {
      setEraserSelected(false);
    } else {
      setEraserSelected(true);
    }
    setEraserButton(!eraserButton);
  }

  const handleStrokeColourChange = (value) => {

    setStrokeColour(value);
  }

  const handleLineWidthChange = (value) => {

    setLineWidth(value);
  }

  const onHighlightChange = (value) => {

    setShadowBlur(value);
  }

  const handleClearCanvas = () => {
    clearCanvas();
  }

  const handleDownload = () => {

    downloadCanvasAsImage();
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
        extra={<ToolToogleButton vis={vis} setVis={setVis} />}
        style={{ width: 140, borderRadius: 4, position: "absolute", top: 20, left: 15 }}
        className="handle"
      >

        {/* StrokeColour */}
        <Space style={vis ? {} : hiddenClass}>
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
        <Space style={vis ? {} : hiddenClass}>
          <Tooltip placement="topRight" title={'Size'}>
            <InputNumber min={1} max={10} defaultValue={1} onChange={handleLineWidthChange} />
          </Tooltip>
          <Divider />
        </Space>

        {/* Hightlight */}
        <Space style={vis ? {} : hiddenClass}>
          <Tooltip placement="topRight" title={'Hightlight'}>
            <Switch onChange={onHighlightChange} size="small" />
          </Tooltip>
          <Divider />
        </Space>

        {/* Eraser */}
        <Space style={vis ? {} : hiddenClass}>
          {eraserButton ? (
            <Tooltip placement="right" title="Deselect Eraser">
              <Button shape="circle" type="primary" onClick={handleEraserSelect} >
                <FaEraser />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip placement="right" title="Select Eraser">
              <Button shape="circle" type="primary" onClick={handleEraserSelect} ghost>
                <FaEraser />
              </Button>
            </Tooltip>
          )}
          <Divider />
        </Space>

        {/* Clear Canvas */}
        <Space style={vis ? {} : hiddenClass}>
          <Tooltip placement="right" title="Clear Canvas">
            <Button type="primary" icon={<ClearOutlined />} onClick={handleClearCanvas}>
              Reset
            </Button>
          </Tooltip>
          <Divider />
        </Space>

        {/* Download as PNG */}
        <Space style={vis ? {} : hiddenClass}>
          <Tooltip placement="right" title="Download as PNG">
            <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
              Download
            </Button>
          </Tooltip>
          <Divider />
        </Space>

      </Card>

    </Draggable >
  );
}

export default ToolKit;