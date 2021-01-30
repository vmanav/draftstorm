import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Card, Menu, Dropdown, Typography } from 'antd';
import { ToolOutlined, UserOutlined } from '@ant-design/icons';

import { Button, message, Space, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const { Text, Title } = Typography;


const ToolKit = () => {

  const [vis, setVis] = useState(false);

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
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

    </Draggable >
  );
}

export default ToolKit;

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