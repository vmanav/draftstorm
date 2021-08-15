import React, { useState } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import ChatWrapper from './components/ChatWrapper';
import Join from './components/Join';

const App = () => {
  const [user, setUser] = useState("");
  return (
    <Router>
      <Route path="/" exact>
        <Join userName={user} setUser={setUser} />
      </Route>
      <Route path="/chat/:room" >
        <ChatWrapper user={user} setUser={setUser} />
      </Route>
    </Router>
  );
}

export default App;
