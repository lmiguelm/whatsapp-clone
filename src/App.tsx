import React from 'react';
import './global.css';

import Aside from './components/Aside';
import Chat from './components/Chat';

function App() {
  return (
    <div id="page">
      <div className="page-container">
        <Aside />
        <Chat />
      </div>
    </div>
  );
}

export default App;
