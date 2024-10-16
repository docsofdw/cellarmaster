import React, { useState } from 'react';

const Wines = () => {
  const [wines, setWines] = useState([]);
  const [newWine, setNewWine] = useState('');

  const addWine = () => {
    if (newWine.trim()) {
      setWines([...wines, newWine]);
      setNewWine('');
    }
  };

  return (
    <div>
      <h1>Wines</h1>
      
      <div>
        <input
          type="text"
          placeholder="Enter wine name"
          value={newWine}
          onChange={(e) => setNewWine(e.target.value)}
        />
        <button onClick={addWine}>Add Wine</button>
      </div>

      <ul>
        {wines.map((wine, index) => (
          <li key={index}>{wine}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wines;
