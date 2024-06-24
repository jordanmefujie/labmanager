import React from 'react';

function LabDetails({ lab }) {
  return (
    <div>
      <h2>{lab.name}</h2>
      <p>{lab.description}</p>
    </div>
  );
}

export default LabDetails;
