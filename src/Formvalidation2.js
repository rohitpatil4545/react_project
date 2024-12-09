import React, {useState}from 'react'
import { Button,TextField } from '@mui/material' ;

const Formvalidation2 = () => { 
    const [form,setform]=useState({
        name:'',email:'',password:'',age:''
 } );  

 const handlechange=(e)=>{
    const {name,value}=e.target;
    setform({
        ...form,
        [name]:value,
    })
 }

 const handlemessage=()=>{
     alert("Name:"+ form.name+"\n\n"+
        "Email:"+ form.email+"\n\n"+"Password:"+ form.password+"\n\n"+"Age:"+ form.age
     )
 }
  return (
    <div> 
        <form onSubmit={handlemessage} >
        <TextField 
          label='Name' 
          name='name'
          variant='outlined'
          fullWidth 
          margin='normal'
          value={form.name}
          onChange={handlechange}
          required
        />  

        
         <TextField 
          label='Email' 
          name='email'
          variant='outlined'
          fullWidth 
          margin='normal'
          value={form.email}
          onChange={handlechange}
          required
        /> 

        
         <TextField 
          label='Password' 
          name='password'
          variant='outlined'
          fullWidth 
          margin='normal'
          value={form.password}
          onChange={handlechange}
          required
        /> 

        
        <TextField 
          label='Age' 
          name='age'
          variant='outlined'
          fullWidth 
          margin='normal'
          value={form.age}
          onChange={handlechange}
          required
        /> 
         <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
        </form> 
    </div>
  )
}

export default Formvalidation2