import React from 'react'
import { GoDotFill } from "react-icons/go";
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (

    <>
      <Navbar />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 px-[40px] py-[80px] w-[80%] mx-auto'>

        <div className='pt-[30px]'>
          <h1
            className='text-2xl text-orange-900 font-bold uppercase'
            id='about'
          >
            About Us
          </h1>

          <p className='text-gray-500 pt-[10px] leading-8'>
            Our User Management System is designed to help organizations
            efficiently manage user information in one secure platform.
            The system allows administrators to create, view, update,
            and delete user records with ease. Our goal is to provide a
            simple, reliable, and user-friendly solution that improves
            productivity and makes user data management faster and more
            organized.
          </p>

          <div className='flex pt-[15px] text-[20px]'>
            <GoDotFill className='text-gray-500' />
            <GoDotFill className='text-orange-800' />
            <GoDotFill className='text-gray-500' />
          </div>
        </div>

        <div className='mt-6'>
          <img
            src="../users.png"
            alt="User Management System"
            className='rounded-2xl w-full'
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;