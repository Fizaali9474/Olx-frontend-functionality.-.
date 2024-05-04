/*import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {register} from '../../config/Firebase'

function Register() {
    const navigate = useNavigate()
    const [fullName, setFullName]=useState()
    const [age,setAge]=useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()

    const signup = () => {
         register({email,password,age,fullName})
        
    }

  return (
    <div>
    <h2>Register</h2>
    <input placeholder='full name' onChange={(e) => setFullName}/>
    <input placeholder='age' onChange={(e) => setAge}/>
    <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

    <br/><br/>
    <button onClick={signup}> Register</button>
    <p> Already have an account.
    <span onClick={() => navigate ('/login')}>Login</span></p>
      
    </div>
  )
}

export default  Register*/



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../config/Firebase';
import './index.css';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const log = await register({ fullName, email, age, password });
    if (log) {
      setTimeout(() => {
        navigate('/Login');
      }, 1000);
    }
  };

  return (
    <div className='relative'>
      <div className='absolute uniqueBackground'>
        <div className='absolute bg-overlay'></div>
      </div>

      <div className='relative top-[200px] h-[40vh] max-w-[800px] mx-auto form-container'>
        {/* <h1 className='text-[40px] font-bold leading-[45px] text-white'>Create <br />New Account</h1> */}
        <p className=' mt-3 olx'>Olx</p>

        {/* <div className='mt-3 flex flex-col gap-5'>
          <div className='border-2 w-1/6 border-white rounded-full' />
          <p className='text-[16px]  text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper mauris in magna venenatis suscipit.</p>
        </div> */}

        <div className='basis-1/2  h-full bg-[#ffffff47] rounded-[20px] backdrop-filter backdrop-blur-md'>
          <div className='flex flex-col pb-4 gap-2 justify-between h-full w-[80%] mx-auto'>
            <h2 className='text-[30px] text-white font-bold text-center mb-3'>Register</h2>

            <div className='flex flex-col gap-2'>
              <label className='form-label'>NAME</label>
              <input onChange={(e) => setFullName(e.target.value)} type="text" className='form-input' placeholder='Enter Your Name' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='form-label'>EMAIL</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input' placeholder='Enter Your Email' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='form-label'>AGE</label>
              <input onChange={(e) => setAge(e.target.value)} type="text" className='form-input' placeholder='Enter Your Age' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='form-label'>PASSWORD</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-input' placeholder='Enter Your Password' />
            </div>

            <button onClick={handleSubmit} className='form-button'>Sign Up</button>

            <p className='text-[20px] font-medium text-white mt-3'>Already Registered? <span className='login-link' onClick={() => navigate('/login')}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
