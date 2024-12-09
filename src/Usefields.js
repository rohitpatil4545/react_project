import React from 'react'

const Usefields = ({user}) => { 
    const {name,age,email,address}=user;
  return (
    <div>
     <h1>Information</h1> 
     <p>Name:{name}</p>
     <p>Age:{age}</p>      
     <p>Email:{email}</p>
     <p>Address:{address}</p>
    </div>
  )
}

export default Usefields