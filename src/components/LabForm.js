import React, { useState } from 'react';
import { addLab } from '../services/labService';

function LabForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLab = { name, description };
    await addLab(newLab);
    // Optionally, redirect to the labs list or clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Lab</button>
    </form>
  );
}

export default LabForm;
