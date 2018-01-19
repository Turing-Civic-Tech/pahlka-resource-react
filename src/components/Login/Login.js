import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='Login'>
      <label htmlFor='charity-email'
             className='login-labels'>
        Charity Email
      </label>
      <input type='text' 
             className='login-inputs' 
             id='charity-email' 
             placeholder='Enter Charity Email' 
      />
      <label htmlFor='password' 
             className='login-labels'>
        Password
      </label>
      <input type='text'
             className='login-inputs' 
             id='password' 
             placeholder='Enter Password' 
             />
    </div>
  )
}

export default Login;