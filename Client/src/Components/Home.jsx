import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import { GoDotFill } from "react-icons/go";
import { FaUserSecret } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-[url('../image.png')] h-screen bg-center bg-cover bg-no-repeat bg-black flex justify-center items-center">

                <div className="w-[90%] md:w-[40%] bg-white/70 backdrop-blur text-center rounded-xl p-6 shadow-lg">

                    <h1 className="text-[#843e71] text-2xl font-bold">
                        SIMPLE & SECURE USERS MANAGEMENT SYSTEM
                    </h1>

                    <p className="font-semibold pt-3 text-gray-600">
                        Manage all your users in one place with ease.
                        Add, update, view, and delete user information quickly and securely.
                        Designed for speed, simplicity, and reliability in modern applications.
                    </p>

                    <Link to="/register"> <button className="px-6 py-2 bg-[#843e71] text-white rounded-full mt-5 hover:bg-[#631c50] transition">
                        GET STARTED
                    </button>
                    </Link>
                </div>
            </section>

            {/* About section */}
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

            {/* footer section */}
            <Footer />
        </div>
    )
}

export default Home