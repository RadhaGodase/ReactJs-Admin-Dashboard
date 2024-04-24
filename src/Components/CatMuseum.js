import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatMuseum.css';

const CatTable = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setCats(response.data);
      })
      .catch(error => {
        console.error('Error fetching cats:', error);
      });
  }, []);

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  return (
    <div className="cat-container">
      <div className="cat-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat, index) => (
              <tr key={cat.id} onClick={() => handleCatClick(cat)}>
                <td>{index + 1}</td>
                <td>{cat.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="selected-cat">
        {selectedCat && <img src={selectedCat.url} alt={selectedCat.id} />}
      </div>
    </div>
  );
};

export default CatTable;
