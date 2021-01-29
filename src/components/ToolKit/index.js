import React from 'react';
import Draggable from 'react-draggable';

const ToolKit = () => {


  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div
      // style={{ position: "absolute", zIndex: 1 }}
      >
        <div className="handle" style={{ backgroundColor: "lightcoral" }}>Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable >
  );
}

export default ToolKit;
