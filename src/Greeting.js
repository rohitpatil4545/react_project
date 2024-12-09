import React from 'react'

const Greeting = () => { 
    const name=['Apple','Banana','carrat','dryfruit'];
  return (
    <div> 
        <h2>Greeting names: </h2>
       <ul>
           {
             name.map((name,index)=> 
                <li key={index}>Hello {name}</li>
            )}
       </ul>
    </div>
  )
}

export default Greeting