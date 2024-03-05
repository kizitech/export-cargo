import React from 'react'
import cargo from '../assets/cargo.jpg'

const ContactHeader: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src={cargo} className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">Contact Us</h1>
                <p className="text-lg text-gray-300 mb-8 w-full max-w-2xl mx-auto">Connect with us effortlessly on our Contact Us page. We're here to assist you promptly with all your cargo inquiries and needs. Let's start a conversation today!</p>
            </div>
        </div>

    )
};

export default ContactHeader