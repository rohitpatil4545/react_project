import React, { useState } from 'react';

const VariableComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); 
  };
 
  const decerementCount=()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h2>Count: {count}</h2> 
      <button onClick={incrementCount}> 
        +
      </button> 
       
      {<button onClick={decerementCount}> 
        -
      </button> 
       }
    </div>
  );
};

export default VariableComponent;
