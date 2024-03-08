import React from 'react';

const TrackCargoForm: React.FC = () => {

    return (
        <div className="h-screen bg-gray-50 flex  flex-col gap-20 justify-center items-center px-4">
            <h1 className='font-bold md:font-extrabold text-dark text-3xl lg:text-5xl text-center'>Enter The Consigment No.</h1>
            <div className="relative flex flex-col justify-center items-center mx-auto w-full max-w-3xl shadow-lg rounded-lg bg-white p-4">
                <form className='w-full'>
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Track</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="search" className="block w-full h-16 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dark focus:border-dark" placeholder="Search" required />
                        <button type="submit" className="text-white absolute right-2.5 top-1.5 bg-dark hover:bg-opacity-95 focus:ring-4 focus:outline-none focus:ring-dark3 font-medium rounded-full md:rounded-lg text-sm px-6 py-4 dark:bg-dark dark:hover:bg-dark dark:focus:ring-dark">Track Now</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default TrackCargoForm;
