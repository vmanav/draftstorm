import React from 'react';
import { Button, Tooltip } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

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
