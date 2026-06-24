import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaUserSecret, FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="h-[70px] w-full px-5 md:px-8 flex justify-between items-center shadow-md bg-white relative">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaUserSecret className="text-[#843e71] text-2xl" />
                    <h1 className="text-xl">
                        User<span className="text-[#843e71] font-black">Hub</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-[18px]">
                    <Link
                        to="/"
                        className="text-[#5a0d4c] hover:text-[#843e71]"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-[#5a0d4c] hover:text-[#843e71]"
                    >
                        About
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <Link
                        to="/register"
                        className="bg-[#5a0d4c] text-white px-4 py-2 rounded hover:bg-[#843e71]"
                    >
                        SignUp
                    </Link>

                    <Link
                        to="/login"
                        className="bg-[#5a0d4c] text-white px-4 py-2 rounded hover:bg-[#843e71]"
                    >
                        Login
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-2xl text-[#5a0d4c]"
                >
                    <FaBars />
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-screen w-[260px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Close Icon */}
                    <div className="flex justify-end p-5">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-3xl text-[#5a0d4c]"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center gap-8 mt-10 text-xl">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-[#5a0d4c] hover:text-[#843e71]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="text-[#5a0d4c] hover:text-[#843e71]"
                        >
                            About
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#5a0d4c] text-white px-5 py-2 rounded"
                        >
                            SignUp
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#5a0d4c] text-white px-5 py-2 rounded"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dark Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}
        </>
    );
}

export default Navbar