import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import ToolKit from '../ToolKit';

// const strokeColour = "black";
const lineWidth = 1;

const Canvas = (props) => {

  let prevX, prevY, currX, currY;
  let pressed = false;
  let { socket } = props;
  // console.log("SOCKET : ", socket);

  const canvasRef = useRef(null);
  const memCanvasRef = useRef(null);


  const [strokeColour, setStrokeColour] = useState("#141414");

  const handleResize = () => {

    console.log("handleResize called.");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // console.log("=> ctx", ctx);

    var memCanvas = memCanvasRef.current;
    var memCtx = memCanvas.getContext('2d');


    let oldWidth = canvas.width;
    let oldHeight = canvas.height;
    let newWidth = canvas.parentElement.clientWidth;
    let newHeight = canvas.parentElement.clientHeight;


    // Change Memory Canvas Width
    memCanvas.width = newWidth;
    memCanvas.height = newHeight;
    // Redraw Memory Canvas
    memCtx.scale(newWidth / oldWidth, newHeight / oldHeight);
    memCtx.drawImage(canvas, 0, 0);
    // memCtx.scale(newWidth / oldWidth, newHeight / oldHeight);
    // console.log("SCALE VALUES : ", newWidth / oldWidth, " and ", newHeight / oldHeight)

    // Now Change Original Canvas
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(memCanvas, 0, 0);


    // ctx.canvas.width = 0.95 * window.innerWidth;
    // ctx.canvas.height = 0.95 * window.innerHeight;


    // ctx.canvas.width = canvas.parentElement.clientWidth;
    // ctx.canvas.height = canvas.parentElement.clientHeight;

  }

  // const clearCanvas = () => {
  //   const canvas = canvasRef.current
  //   const ctx = canvas.getContext('2d');
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }

  useEffect(() => {

    // console.log("rect vala useEff called.");
    const canvas = canvasRef.current
    // console.log("URGENT ++++++++++++ => ", canvas.parentElement.clientWidth);


    const ctx = canvas.getContext('2d');
    // console.log("Window : ", window);
    // ctx.canvas.width = 0.95 * window.innerWidth;
    // ctx.canvas.height = 0.95 * window.innerHeight;
    ctx.canvas.width = canvas.parentElement.clientWidth;
    ctx.canvas.height = canvas.parentElement.clientHeight;

    // console.log("Info : ", ctx.canvas);

    // //Our first draw
    // ctx.fillStyle = '#000000'
    // ctx.fillRect(15, 0, ctx.canvas.width / 7, ctx.canvas.height)


    window.addEventListener('resize', handleResize);
  }, [])

  const handleMouseDown = (e) => {


    const canvas = canvasRef.current
    // console.log("canvas.offsetLeft : ", canvas.getBoundingClientRect().left)
    pressed = true;
    prevX = e.pageX - canvas.getBoundingClientRect().left;
    prevY = e.pageY - canvas.getBoundingClientRect().top;

    socket.emit('c_mouse_down', {
      prevX: prevX,
      prevY: prevY,
      strokeColour: strokeColour,
      lineWidth: lineWidth
    })
  }

  const handleMouseMove = (e) => {

    const canvas = canvasRef.current
    if (pressed) {
      currX = e.pageX - canvas.getBoundingClientRect().left;
      currY = e.pageY - canvas.getBoundingClientRect().top;

      socket.emit('c_mouse_move', {
        prevX: prevX,
        prevY: prevY,
        currX: currX,
        currY: currY
      })
      prevX = currX;
      prevY = currY;
    }
  }

  const handleMouseUp = () => {
    console.log("pressed : ", pressed);
    pressed = false;
  }

  const handleMouseOut = () => {
    pressed = false;
  }

  useEffect(() => {
    console.log("on vala useEff called.");
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    socket.on('s_mouse_down', (payload) => {
      // console.log("stroke colour jo mila ", payload.strokeColour)
      ctx.beginPath();
      ctx.moveTo(payload.prevX - 1, payload.prevY - 1);
      ctx.strokeStyle = payload.strokeColour;
      ctx.lineWidth = payload.lineWidth;
      ctx.lineTo(payload.prevX, payload.prevY);
      ctx.stroke();
    })


    socket.on('s_mouse_move', (payload) => {

      ctx.moveTo(payload.prevX, payload.prevY);
      ctx.lineTo(payload.currX, payload.currY);
      ctx.stroke();
    })

  }, [socket])


  return (
    <>
      <canvas
        style={{
          border: '1px solid red',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f7ede2',
          // position: 'absolute'
        }}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        ref={canvasRef}
        {...props}
      ></canvas>
      <canvas
        id="memCanvas"
        ref={memCanvasRef}
        style={{ display: 'none' }}
      >
      </canvas>
      <ToolKit
        setStrokeColour={setStrokeColour}
      />
      {/* <button onClick={clearCanvas}>Clear Canvas</button> */}
    </>
  );
}

export default Canvas;