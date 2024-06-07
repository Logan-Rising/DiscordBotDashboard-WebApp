// src/BoxGrid.js
import React, { useState } from 'react';

const Box = ({ id, onClick, isOpen, initialContent, revealedContent }) => {
  return (
    <div className={`box ${isOpen ? 'open' : 'initial'}`} onClick={() => onClick(id)}>
      <span>{isOpen ? revealedContent : initialContent}</span>
    </div>
  );
};

const BoxGrid = ({ boxes }) => {
  const [openBoxes, setOpenBoxes] = useState(Array(boxes.length).fill(false));

  const handleClick = (id) => {
    const newOpenBoxes = [...openBoxes];
    newOpenBoxes[id] = !newOpenBoxes[id];
    setOpenBoxes(newOpenBoxes);
  };

  return (
    <div className="home-grid-container">
      {boxes.map((box, i) => (
        <Box
          key={i}
          id={i}
          onClick={handleClick}
          isOpen={openBoxes[i]}
          initialContent={box.initialContent}
          revealedContent={box.revealedContent}
        />
      ))}
    </div>
  );
};

export default BoxGrid;
