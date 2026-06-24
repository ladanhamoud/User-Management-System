
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { toast } from 'react-toastify';
import axios from 'axios';

const EditUser = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: ""
  }
  )

  const handlechange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // getsingleuser
  const getSingleUser = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`http://localhost:8000/api/user/${id}`,
        {
          headers: {
            Authorization: token
          }
        })
      setUser(response.data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getSingleUser()
  }, [])

  // updateUser
  const updateUser = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    try {
      const response = await axios.put(`http://localhost:8000/api/update/${id}`, user,
        {
          headers: {
            Authorization: token
          }
        })

      toast.success(response.data.message)
      navigate("/users")
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  return (
    <section className='bg-[#843e71] h-screen flex items-center justify-center '>
      <div className='bg-white/20 w-[350px] h-[400px] md:w-[400px] p-9 shadow-2xl rounded-2xl'>
        <Link to="/users"> <IoArrowBack className='font-bold text-2xl text-white' /></Link>
        <h1 className='text-center text-white text-2xl font-bold'>Edit User</h1>
        <form className='space-y-2' onSubmit={updateUser}>
          <div className='flex flex-col'>
            <label className='text-white text-[18px]'>Name </label>
            <input className='outline-none border-1 border-gray-200 pl-3 rounded'
              type="text"
              name='name'
              placeholder='Enter Your Name'
              value={user.name}
              onChange={handlechange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-white text-[18px]'>Email</label>
            <input className='outline-none border-1 border-gray-200 pl-3 rounded'
              type="email"
              name='email'
              value={user.email}
              placeholder='Enter Your Email'
              onChange={handlechange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-white text-[18px]'>Address</label>
            <input className='outline-none border-1 border-gray-200 pl-3 rounded'
              type="text"
              name='address'
              value={user.address}
              placeholder='Enter Your Address'
              onChange={handlechange}
            />
          </div>

          <button type='submit' className='w-[100%] bg-[#843e71] text-white py-[3px] my-2 rounded-2xl'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default EditUser