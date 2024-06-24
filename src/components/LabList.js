import React from 'react';
import LabDetails from './LabDetails';

function LabList({ labs }) {
  return (
    <div>
      {labs.map((lab) => (
        <LabDetails key={lab.id} lab={lab} />
      ))}
    </div>
  );
}

export default LabList;
