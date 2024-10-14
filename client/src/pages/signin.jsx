import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      Navigate('/')
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      
        <input
          onChange={handleChange}
          type='text'
          placeholder='Email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input
          onChange={handleChange}
          type='password'
          placeholder='Password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Sign In
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/signin'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
