import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleClick = (e) => {
    if (name === "" || room === "") {
      e.preventDefault();
    }
  }

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1>Join</h1>
        <div>
          <input type="text" placeholder="Name" className="nameInput" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Room" className="roomInput" onChange={(e) => setRoom(e.target.value)} />
        </div>
        <Link onClick={(e) => handleClick(e)} to={`/chat?room=${room}&user=${name}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div >
  );
}

export default Join;
