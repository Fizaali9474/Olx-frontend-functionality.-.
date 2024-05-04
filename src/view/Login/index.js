

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../config/Firebase';
import './index.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const sign = await login({ email, password });
    if (sign) {
      setTimeout(() => {
        navigate('/dashboardfb');
      }, 1000);
    }
  };

  return (
    <div className='relative mainBody' >
     
      
         
            <div className='login1 '>
              <h1 className='login-head'>Login</h1>
              <p className='an-account'>
                Don't have an account?
                <span onClick={() => navigate('/Register')} className='register'>
                  Register
                </span>
              </p>
            </div>
          
          {/* <div className=''>
            <h2 className='text-[45px] text-white absolute left-0 right-0 top-2 font-bold text-center'>Login</h2> */}

            <div className='flex flex-col gap-1 email-div'>
              <label className='text-white px-4 font-bold email-head'>EMAIL</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='email-input'
                placeholder='Enter Your Email'
              />
            </div>

            <div className='flex flex-col gap-1 pass-div'>
              <label className='text-white px-4 font-bold pass-head'>PASSWORD</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='pass-input'
                placeholder='Enter Your Password '
              />
            </div>
            <button onClick={handleSubmit} className='login-btn'>
              Login
            </button>
         
       
     
    </div>
  );
};

export default Login;
