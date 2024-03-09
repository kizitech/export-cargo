import React from 'react';
import airCargo from '../assets/air-cargo.jpg'
import truck from '../assets/truck.jpg'

const AboutUsSection: React.FC = () => {
    return (
        <section id='about' className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold md:font-extrabold text-gray-900 dark:text-white">Efficient Cargo Transportation Solutions</h2>
                    <p className="mb-4">We specialize in providing comprehensive cargo transportation solutions. Our team consists of logistics experts, designers, and developers dedicated to innovating and solving transportation challenges.</p>
                    <p>We pride ourselves on being agile and responsive, capable of meeting your cargo transportation needs with precision and speed.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg object-cover h-[450px] object-center" src={airCargo} alt="One of our air cargo" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg object-cover h-[450px] object-center" src={truck} alt="our effiecient trucks" />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
