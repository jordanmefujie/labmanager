import React, { useEffect, useState } from 'react';
import LabList from '../components/LabList';
import { getLabs } from '../services/labService';

function Labs() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    async function fetchLabs() {
      const response = await getLabs();
      setLabs(response.data);
    }

    fetchLabs();
  }, []);

  return (
    <div>
      <h1>Labs</h1>
      <LabList labs={labs} />
    </div>
  );
}

export default Labs;