
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='text-center my-[200px]'>
      <h2 className='text-red-600 text-6xl mb-[10px]'>404</h2>
      <p className=' mb-[10px] text-2xl'>this page is not found!</p>
      <button className='px-[20px] py-[10px] bg-[#843e71] rounded text-white'> <Link to="/" > Go back to home</Link> </button>
    </section>
  )
}

export default NotFound