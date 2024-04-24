import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import './CatFacts.css';

const CatFacts = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://catfact.ninja/fact')
        .then(response => {
          setFact(response.data.fact);
        })
        .catch(error => {
          console.error('Error fetching cat fact:', error);
        });
    }, 20000); // Fetch a new fact every 20 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run the effect only once on component mount

  return (
    <div className="cat-facts">
      <div className="fact-box">
        {fact}
      </div>
    </div>
  );
};

export default CatFacts;