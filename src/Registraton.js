// import React, {useState}from 'react'
// import { Button,TextField } from '@mui/material' ;

// const Registration = () => { 
//     const [form,setform]=useState({
//         name:'',email:'',password:'',age:''
//  } );  

//  const handlechange=(e)=>{
//     const {name,value}=e.target;
//     setform({
//         ...form,
//         [name]:value, 
        
//     })
//  }

//  const handleSubmit=(e)=>{
//     e.preventDefault ();   
//   //  document.write(`
//   //       Submitted From is: <br><br>
//   //       Name:  ${form.name} <br> <br>
//   //       Email:  ${form.email} <br>  <br>
//   //       Password:  ${form.password} <br> <br>
//   //       Age:  ${form.age} 
//   //   `)
//  }
//   return (
//     <div> 
//         <form onSubmit={handleSubmit} >
//         <TextField 
//           label='Name' 
//           name='name'
//           variant='outlined'
//           fullWidth 
//           margin='normal'
//           value={form.name}
//           onChange={handlechange}
//           required
//         />  

        
//          <TextField 
//           label='Email' 
//           name='email'
//           variant='outlined'
//           fullWidth 
//           margin='normal'
//           value={form.email}
//           onChange={handlechange}
//           required
//         /> 

        
//          <TextField 
//           label='Password' 
//           name='password'
//           variant='outlined'
//           fullWidth 
//           margin='normal'
//           value={form.password}
//           onChange={handlechange}
//           required
//         /> 

        
//         <TextField 
//           label='Age' 
//           name='age'
//           variant='outlined'
//           fullWidth 
//           margin='normal'
//           value={form.age}
//           onChange={handlechange}
//           required
//         /> 
//          <Button variant="contained" color="primary" type="submit">
//                         Submit
//                     </Button> 
        

//                     {submittedData && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>Form Submitted</h2>
//                     <p><strong>Name:</strong> {form.name}</p>
//                     <p><strong>Email:</strong> {form.email}</p>
//                     <p><strong>Password:</strong> {form.password}</p>
//                     <p><strong>Age:</strong> {form.age}</p>
//                 </div>
//             )}
//         </div>

     
//         </form> 
//     </div>
//   )
// }

// export default Registration;   


import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Registration = () => { 
    const [form, setForm] = useState({
        name: '', email: '', password: '', age: ''
    });  
    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted form data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value, 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();   
        setSubmittedData(form); // Save form data to submittedData state
    };

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <TextField 
                    label='Name' 
                    name='name'
                    variant='outlined'
                    fullWidth 
                    margin='normal'
                    value={form.name}
                    onChange={handleChange}
                    required
                />  
                <TextField 
                    label='Email' 
                    name='email'
                    variant='outlined'
                    fullWidth 
                    margin='normal'
                    value={form.email}
                    onChange={handleChange}
                    required
                /> 
                <TextField 
                    label='Password' 
                    name='password'
                    variant='outlined'
                    fullWidth 
                    margin='normal'
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                /> 
                <TextField 
                    label='Age' 
                    name='age'
                    variant='outlined'
                    fullWidth 
                    margin='normal'
                    value={form.age}
                    onChange={handleChange}
                    required
                /> 
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button> 
            </form> 

            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Form Submitted</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                    <p><strong>Age:</strong> {submittedData.age}</p>
                </div>
            )}
        </div>
    );
}

export default Registration;
