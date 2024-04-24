import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = time.getDate();
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear();
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const ampm = time.getHours() >= 12 ? 'pm' : 'am';

  const formattedTime = `${getOrdinalSuffix(date)} ${month} ${year} [${hours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}]`;

  function getOrdinalSuffix(date) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = date % 100;
    return date + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }

  return (
    <div>
      <h2>ReactJs Admin Dashboard</h2>
      <div>{formattedTime}</div>
    </div>
  );
};

export default Clock;