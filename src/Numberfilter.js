import React from 'react';

const Numberfilter = () => {
  const number = Array.from({ length: 20 }, (_, index) => index + 1);
  const evenNumbers = number.filter((num) => num % 2 === 0);

  return (
    <div>
      <h1>Filtered Numbers (Even):</h1>
      <ul>
        {evenNumbers.map((num) => (
          <li key={num}>{num}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Numberfilter;
