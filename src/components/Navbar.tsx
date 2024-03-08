import { useState } from 'react'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleCloseMobileNav = () => {
        setToggle(false);
    }

    return (
        <header className='w-full h-16 lg:h-[96px] bg-white shadow-sm p-4 top-0 sticky z-50'>
            <div className='max-w-7xl m-auto w-full h-full flex justify-between items-center'>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
                    Export Cargo
                </h1>
                <div className="flex items-center">
                    <ul className='hidden md:flex gap-10 transition-all'>
                        <NavLink to="/#"><li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">Home</li></NavLink>
                        <NavLink to="/#about"><li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">About Us</li></NavLink>
                        <NavLink to="/#service"><li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">Services</li></NavLink>
                        <NavLink to="/contact"><li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">Contact</li></NavLink>
                    </ul>
                </div>
                <div className='md:flex hidden'>
                    <Link to="/tracker" className='px-8 py-3 bg-dark hover:bg-opacity-85 text-white rounded'>Cargo Tracker</Link>
                </div>
                <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                    <img src={toggle ? Close : Hamburger} alt="hamburger" />
                </motion.div>
            </div>
            <div className='w-full relative'>
                <motion.ul
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className={toggle ? 'absolute z-10 bg-white p-4 w-full shadow-2xl md:hidden' : 'hidden'}>
                    <NavLink to="/#" onClick={handleCloseMobileNav}><li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">Home</li></NavLink>
                    <NavLink to="/#about" onClick={handleCloseMobileNav}><li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">About Us</li></NavLink>
                    <NavLink to="/#service" onClick={handleCloseMobileNav}><li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">Services</li></NavLink>
                    <NavLink to="/contact" onClick={handleCloseMobileNav}><li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">Contact</li></NavLink>
                    <div className='flex flex-col my-10 gap-4'>
                        <Link to="/tracker" className='px-8 py-5 text-center bg-dark text-white rounded'>Cargo Tracker</Link>
                    </div>
                </motion.ul>
            </div>
        </header>
    )
}

export default Navbar
