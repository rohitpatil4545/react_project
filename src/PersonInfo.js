import React from 'react';

const PersonInfo = () => { 
    const name='Rohit patil';
    const age=20;
    const address="Rohit patil: ";
  return (
     <> 
       <h2>Person Info: </h2>
       <p>Name:{name}</p>
       <p>Age:{age}</p> 
       <p>Address:{address}</p>
     </>
  );
}

export default PersonInfo;