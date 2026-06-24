import React from 'react'
import { FaUserSecret } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='bg-[#843e71] px-[40px] py-[15px]'>
            <div className='flex items-center justify-between'>
                <div className='flex justify-between items-center'>
                    <FaUserSecret className='text-white text-2xl' />
                    <h1 className='text-[20px]'>User<span className='text-white font-black'>Hub</span></h1>
                </div>
                <div className='flex items-center justify-between  gap-2 text-[20px] text-white'>
                    <FaFacebook  />
                    <FaLinkedin  />
                    <FaWhatsapp  />
                    <FaInstagramSquare />
                </div>
            </div>
            <span className='text-white '> __________________________________________________________________________________________________________________________________________________________________________________</span>
            <p className='text-white text-center pt-[10px] '>Copyright@2026;All right reserved by UserHub</p>
        </section>
    )
}

export default Footer