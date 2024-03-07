import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='w-full bg-white pt-10 pb-2 px-4'>
            <section className='max-w-7xl m-auto flex flex-col gap-8'>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 uppercase tracking-wide">
                    Export Cargo
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-5 max-w-[768px]:md:grid-cols-6 gap-4 md:gap-8'>
                    <div className='col-span-1'>
                        <h3 className="font-bold text-lg mt-10">Contact us</h3>
                        <h3 className="py-2 text-dark3 text-xs sm:text-sm">call: 647 68658 86658</h3>
                        <h3 className="py-2 text-dark3 text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia .</h3>
                        <h3 className="py-2 text-dark2 text-xs sm:text-sm">Email: example@gmail.com</h3>

                        <div className="flex gap-4 py-4">
                            <div className="p-4 rounded-xl bg-snow cursor-pointer"><FaFacebook size={20} /></div>
                            <div className="p-4 rounded-xl bg-snow cursor-pointer"><FaTwitter size={20} /></div>
                            <div className="p-4 rounded-xl bg-snow cursor-pointer"><FaLinkedin size={20} /></div>
                            <div className="p-4 rounded-xl bg-snow cursor-pointer"><FaYoutube size={20} /></div>
                        </div>
                    </div>

                    <div className='col-span-1 min-w-[150px]'>
                        <h3 className="font-bold text-lg mt-10">Explore</h3>
                        <ul className="py-3 text-dark3">
                            <li className="py-1 text-xs sm:text-sm">Ship Tracking</li>
                            <li className="py-1 text-xs sm:text-sm">Freight Services</li>
                            <li className="py-1 text-xs sm:text-sm">Cargo Handling</li>
                            <li className="py-1 text-xs sm:text-sm">Port Services</li>
                        </ul>
                    </div>

                    <div className='col-span-1'>
                        <h3 className="font-bold text-lg mt-10">Categories</h3>
                        <ul className="py-3 text-dark3">
                            <li className="py-1 text-xs sm:text-sm">Container Shipping</li>
                            <li className="py-1 text-xs sm:text-sm">Air Freight</li>
                            <li className="py-1 text-xs sm:text-sm">Bulk Cargo</li>
                            <li className="py-1 text-xs sm:text-sm">Logistics Solutions</li>
                            <li className="py-1 text-xs sm:text-sm">Customs Clearance</li>
                            <li className="py-1 text-xs sm:text-sm">Warehousing</li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <h3 className="font-bold text-lg mt-10">Subscribe</h3>
                        <h3 className="py-2 text-dark3 text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia .</h3>
                        <form className='input-box-shadow flex justify-content-between items-center bg-transparent gap-1'>
                            <input type="text" className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500 rounded-s" placeholder='Enter your email address here' />
                            <button className='my-2 px-5 py-3 bg-dark text-white rounded-e'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-gray-500 text-center">© {currentYear} Export Cargo. All Rights Reserved.</p>
                </div>
            </section>
        </footer>

    )
}

export default Footer