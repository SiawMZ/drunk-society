import React, { useState } from "react";

const Player = ({ index, position, colors }) => {
  const [name, setName] = useState(`Player ${index + 1}`);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={`player-${index + 1}`} style={{ color: colors[index] }}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="border border-gray-300 p-1 rounded-md mr-2"
      />
      You at Question: {position}
    </div>
  );
};

export default Player;
