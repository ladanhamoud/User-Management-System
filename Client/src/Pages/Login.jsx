import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    address: "",

  }
  )

  const handlechange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      return toast.error("Please fill the fields")
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", user)
      localStorage.setItem("token", response.data.token)
      toast.success(response.data.message)
      navigate("/users")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className='bg-[#843e71] h-screen flex items-center justify-center '>
      <div className='bg-white/20 w-[350px] h-[380px] md:w-[400px] p-9 shadow-2xl rounded-2xl'>
        <Link to="/"> <IoArrowBack className='font-bold text-2xl text-white' /></Link>
        <h1 className='text-center text-white text-2xl font-bold'>Login</h1>
        <p className='text-center text-gray-300 text-[20px] mb-2'>Enter Your Login Credentials</p>
        <form className='space-y-2' onSubmit={submitHandler}>

          <div className='flex flex-col'>
            <label className='text-white text-[18px]'>Email</label>
            <input className='outline-none border-1 border-gray-200 pl-3 rounded'
              type="email"
              name='email'
              placeholder='Enter Your Email'
              onChange={handlechange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-white text-[18px]'>Password</label>
            <input className='outline-none border-1 border-gray-200 pl-3 rounded'
              type="password"
              name='password'
              placeholder='Enter Your Password'
              onChange={handlechange}
            />
          </div>
          <button type='submit' className='w-[100%] bg-[#843e71] text-white py-[3px] my-2 rounded-2xl'>Submit</button>
        </form>
        <p className='text-white text-center '>Not Registered?<Link to="/register" className='text-gray-300 font-bold underline'>Create an account</Link></p>
      </div>
    </section>
  )
}

export default Login