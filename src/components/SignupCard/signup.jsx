import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import './signup.css';


const SignupCard = ()=>{

    // .MuiFormLabel-asterisk
    return(
      <div className='row m-auto col-md-9 forBorder'>
         <div className='formPart'>
            <div className='inForm'>
                <div className='col-md-10 formcontent'>
                <h3>Welcome to <span className='highlight'>Street Suite!</span></h3>
                <p>Create a new account.</p>

<FormControl className="gap-3">

<div>
<FormLabel required className='mb-1 labelfont'
sx={{
  "& .MuiFormLabel-asterisk":{
    color:'white'
  }
}}>Full Name</FormLabel>
  <Input
    name="fullname"
    type="text"
    placeholder="enter your full name"
  />
</div>

<div>
<FormLabel required className='mb-1 labelfont' sx={{
  "& .MuiFormLabel-asterisk":{
    color:'white'
  }
}}>Email</FormLabel>
  <Input
    name="email"
    type="email"
    placeholder="enter your email"
  />
</div>
  <div>
  <FormLabel required className='mb-1 labelfont'sx={{
  "& .MuiFormLabel-asterisk":{
    color:'white'
  }
}}>Password</FormLabel>
  <Input
    name="password"
    type="text"
    placeholder="enter your password"
  />
  </div>
  <FormControlLabel control={<Checkbox />} className='labelfont' label="Remember me" />
  <FormControlLabel required control={<Checkbox />} className='labelfont' label="By creating an account,I have read and agreed to Street Suite's Terms and Conditions" />
      

</FormControl>


    <div className='btnContainer'> 
    <button type="button" className='btnColor'>Sign Up</button>
    </div>
                </div>
               
            </div>

        </div>
      </div>
       
    )

}
export default SignupCard




