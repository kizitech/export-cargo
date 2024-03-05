import React from 'react';
import { FaTruck, FaWarehouse, FaCog, FaBox, FaPlane, FaClock } from 'react-icons/fa';

interface Service {
    title: string;
    description: string;
    Icon: React.ElementType;
}

const services: Service[] = [
    {
        title: 'Export Cargo',
        description: 'we handle various supply chain processes to get freight where it needs to be safely and efficiently',
        Icon: FaTruck
    },
    {
        title: 'Warehousing',
        description: 'we strategically manage storage, movement and goods handling',
        Icon: FaWarehouse
    },
    {
        title: 'Logistic Service',
        description: 'we control all the elements of our supply chain, from the factory to the end customer',
        Icon: FaCog
    },
    {
        title: 'Ground Shipping',
        description: 'We send packages domestically by road or rail.',
        Icon: FaBox
    },
    {
        title: 'International Air Freight',
        description: 'We offer air freight services to over 50 countries worldwide.',
        Icon: FaPlane
    },
    {
        title: 'Fast & Safe Delivery',
        description: 'Our delivery services are known for their speed and safety.',
        Icon: FaClock
    }
];

const ServiceCard: React.FC<Service> = ({ title, description, Icon }) => {
    return (
        <div className="gap-5 flex flex-col xl:flex-row items-stretch justify-start h-full mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mb-7 inline-block text-gray-800">
                <Icon size={40} />
            </div>
            <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800 lg:text-xl">{title}</h3>
                <p className="mb-4 text-base font-medium text-body-color text-dark3">{description}</p>
            </div>
        </div>
    );
};

const ServiceSection: React.FC = () => {
    return (
        <div className=" p-4 py-14 mx-auto bg-white w-full">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">Our Services</h2>
                <p className="text-gray-600 mt-2 mb-20 text-sm md:text-base text-center">Explore our wide range of services designed to meet your logistics needs.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ServiceSection;
