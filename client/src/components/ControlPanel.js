import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onReplay }) => {
  return (
    <div className="control-panel">
      <div className="control-buttons">
        <button
          className="control-btn replay-btn active"
          onClick={onReplay}
          aria-label="Replay Animation"
        >
          <span className="btn-icon">↻</span>
          <span className="btn-text">Replay 3D Animation</span>
        </button>
      </div>

      <div className="animation-info">
        <span className="info-text">5s • Full 3D Element-by-Element Construction</span>
      </div>
    </div>
  );
};

export default ControlPanel;
