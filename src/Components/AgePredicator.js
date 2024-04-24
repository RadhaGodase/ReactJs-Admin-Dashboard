import React, { useState } from 'react';
import axios from 'axios';
import './AgePredicator.css';

const AgePredictor = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const fetchAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
      .then(response => {
        console.log('Response:', response);
        setAge(response.data.age);
      })
      .catch(error => {
        console.error('Error fetching age:', error);
      });
  };  

  const getTextClass = () => {
    if (age >= 1 && age <= 30) {
      return 'green-text';
    } else if (age >= 31 && age <= 60) {
      return 'blue-text';
    } else {
      return 'red-text';
    }
  };

  return (
    <>
    <div className="age-predictor">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={fetchAge}>Predict Age</button>
      <div className="age-result">
        {age && (
          <p className={getTextClass()}>{`Your age is: ${age}`}</p>
        )}
      </div>
    </div>
    </>
  );
};

export default AgePredictor;