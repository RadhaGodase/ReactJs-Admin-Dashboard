import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CryptoValue.css';

const CryptoValue = () => {
  const [values, setValues] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          setValues(response.data.bpi);
        })
        .catch(error => {
          console.error('Error fetching crypto values:', error);
        });
    }, 30000); // Fetch data every 30 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run the effect only once on component mount

  // Define currency symbols
  const symbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  return (
    <div className="crypto-values">
      <div className="values">
        {Object.entries(values).map(([currency, data]) => (
          <div className="value" key={currency}>
            <h1>{symbols[currency]}</h1>
            <p>{data && data.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoValue;
