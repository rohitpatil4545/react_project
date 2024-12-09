import React from 'react'

const Cardetails = () => { 
    const Car={
        Make:'Tata',
        Model:'altroz',
        Year:'2004',
        color:'silver',
    } 
    const {Make,Model,Year,color}=Car;
  return (
    <div>
        <h1>CAR Details</h1>
       <p>Make:{Make}</p>
       <p>Model:{Model}</p>
       <p>Year:{Year}</p>
       <p>Color:{color}</p>
    </div>
  )
}

export default Cardetails