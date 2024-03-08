import React from 'react'
import cargo from '../assets/cargo.jpg'
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src={cargo} className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-5xl font-bold leading-tight mb-4">We Carry Your Trust</h1>
                <p className="text-lg text-gray-300 mb-8 w-full max-w-2xl mx-auto">CARGO SHIPPING EXPRESS: With a global network and advanced logistics solutions, our air freight services provide.</p>
                <Link to="/contact" className="px-10 py-3 bg-white hover:bg-opacity-95 text-dark rounded transition duration-300 ease-in-out transform  hover:shadow-lg">Get Started</Link>
            </div>
        </div>

    )
};

export default CTA