import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

const InfoButton = ({ infoText = "This is some info text!" }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="info-container">
      <button className="info-button" onClick={toggleInfo}>
        <FiInfo size={24} />
      </button>
      {showInfo && (
        <div className="info-box">
          <p>{infoText}</p>
          <button className="close-button" onClick={toggleInfo}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoButton;
