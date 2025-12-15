import React, { useState } from 'react';
import './App.css';
import Logo3DAnimation from './components/Logo3DAnimation';
import ControlPanel from './components/ControlPanel';

function App() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  return (
    <div className="App">
      <ControlPanel 
        onReplay={handleReplay}
      />
      
      <div className="animation-stage-3d">
        <Logo3DAnimation key={`animation-${replayKey}`} />
      </div>

      <div className="info-footer">
        <p className="brand-tagline">Trust-led, engineering-first, premium construction</p>
      </div>
    </div>
  );
}

export default App;
