import React from 'react'
import cargo from '../../src/assets/gallery5.jpg'

const TrackerHeader: React.FC = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src={cargo} className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">Track Your Cargo</h1>
                <p className="text-lg text-gray-300 mb-8 w-full max-w-2xl mx-auto">Effortlessly track your cargo from origin to destination with our intuitive tracking system. Connect with us seamlessly through our Contact Us page for any assistance you need. Your cargo's journey, simplified.</p>
            </div>
        </div>
    )
}

export default TrackerHeader