import React, { useState } from 'react';

const Spirits = () => {
  const [spirits, setSpirits] = useState([]);
  const [newSpirit, setNewSpirit] = useState('');

  const addSpirit = () => {
    if (newSpirit.trim()) {
      setSpirits([...spirits, newSpirit]);
      setNewSpirit('');
    }
  };

  return (
    <div>
      <h1>Spirits</h1>
      
      <div>
        <input
          type="text"
          placeholder="Enter spirit name"
          value={newSpirit}
          onChange={(e) => setNewSpirit(e.target.value)}
        />
        <button onClick={addSpirit}>Add Spirit</button>
      </div>

      <ul>
        {spirits.map((spirit, index) => (
          <li key={index}>{spirit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Spirits;
