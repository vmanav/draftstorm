import React, { useRef, useEffect } from 'react';

const strokeColour = "black";
const lineWidth = 1;

const Canvas = (props) => {
  let prevX, prevY, currX, currY;
  let pressed = false;
  let { socket } = props;
  console.log("SOCKET : ", socket)

  const canvasRef = useRef(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  useEffect(() => {
    console.log("rect vala useEff called.");
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    // console.log("Info : ", context.canvas);

    // //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(15, 0, context.canvas.width / 7, context.canvas.height)

  }, [])

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current
    pressed = true;
    prevX = e.pageX - canvas.offsetLeft;
    prevY = e.pageY - canvas.offsetTop;

    socket.emit('c_mouse_down', {
      prevX: prevX,
      prevY: prevY,
      strokeColour: strokeColour,
      lineWidth: lineWidth
    })
  }

  useEffect(() => {
    console.log("on vala useEff called.");
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    socket.on('s_mouse_down', (payload) => {
      // console.log("stroke colour jo mila ", payload.strokeColour)
      ctx.beginPath();
      ctx.moveTo(payload.prevX - 1, payload.prevY - 1);
      ctx.strokeStyle = payload.strokectxolour;
      ctx.lineWidth = payload.lineWidth;
      ctx.lineTo(payload.prevX, payload.prevY);
      ctx.stroke();
    })
  }, [socket])




  return (
    <>
      <canvas
        onMouseDown={(e) => handleMouseDown(e)}
        ref={canvasRef}
        {...props}
      ></canvas>
      <button onClick={clearCanvas}>Clear Canvas</button>
    </>
  );
}

export default Canvas;

  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");

  // const handleClick = (e) => {
  //   if (name === "" || room === "") {
  //     e.preventDefault();
  //   }
  // }