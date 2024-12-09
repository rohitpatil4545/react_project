// import React from 'react'
// import { Button, TextField, } from '@mui/material'
// const Buttonwindow = () => {
//   return (
//     <div 
//     style={
//       {
//          display:'flex',
//          justifyContent:'center', 
//         alignItems:'center', 
//         marginBottom:'50%', 
//         backgroundImage:URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkf5w_kMhasj8ERvaGvasnxqX76OUDGOLuA&s'
//       }
//     }
//     >
//        <TextField 
//           label='Name' 
//           name='name' 
//           color='white'
//           variant='outlined'
//           // fullWidth 
//           margin='normal'
//         //   value={form.name}
//         //   onChange={handlechange}
//           required
//        />
//     </div>
//   )
// }

// export default Buttonwindow ;  



import React from 'react';
import { Button, TextField } from '@mui/material';

const Buttonwindow = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: '50%', 
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww)',
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        width: '100%', // Adjusts width to fit container
        height: '100vh' // Optional: adjusts height if you want it to cover the viewport
      }}
      >
     <form className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control is-valid"
      id="validationServer01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control is-valid"
      id="validationServer02"
      defaultValue="Otto"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">
      Username
    </label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">
        @
      </span>
      <input
        type="text"
        className="form-control is-invalid"
        id="validationServerUsername"
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
        required=""
      />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control is-invalid"
      id="validationServer03"
      aria-describedby="validationServer03Feedback"
      required=""
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">
      State
    </label>
    <select
      className="form-select is-invalid"
      id="validationServer04"
      aria-describedby="validationServer04Feedback"
      required=""
    >
      <option selected="" disabled="" value="">
        Choose...
      </option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">
      Zip
    </label>
    <input
      type="text"
      className="form-control is-invalid"
      id="validationServer05"
      aria-describedby="validationServer05Feedback"
      required=""
    />
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input is-invalid"
        type="checkbox"
        defaultValue=""
        id="invalidCheck3"
        aria-describedby="invalidCheck3Feedback"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit form
    </button>
  </div>
</form>

    </div>
  );
}

export default Buttonwindow;
