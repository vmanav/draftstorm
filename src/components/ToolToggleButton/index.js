import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Card, Button, Select, Divider, Space, InputNumber, Switch, Tooltip } from 'antd';
import { ToolOutlined, ClearOutlined, DownloadOutlined } from '@ant-design/icons';
import { FaEraser } from "react-icons/fa";


const ToolToogleButton = (props) => {
  const { vis, setVis } = props;
  return (vis ? (
    <Tooltip placement="right" title="Close Tools">
      <Button
        type="primary"
        shape="circle"
        onClick={() => setVis(!vis)}
      >
        <ToolOutlined />
      </Button>
    </Tooltip>
  ) : (
      <Tooltip placement="right" title="Open Tools">
        <Button
          type="primary"
          shape="circle"
          ghost
          onClick={() => setVis(!vis)}
        >
          <ToolOutlined />
        </Button>
      </Tooltip>
    ))
};

export default ToolToogleButton;
