import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Replace with your backend API endpoint
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/example`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
