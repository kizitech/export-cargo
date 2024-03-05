import React from 'react';
import { FaFedex, FaDhl, FaUps, FaUsps } from 'react-icons/fa';
import { SiTnt } from 'react-icons/si';

const PartnershipSection: React.FC = () => {
    const partners = [
        {
            name: 'FedEx',
            icon: FaFedex
        },
        {
            name: 'DHL',
            icon: FaDhl
        },
        {
            name: 'UPS',
            icon: FaUps
        },
        {
            name: 'USPS',
            icon: FaUsps
        },
        {
            name: 'TNT',
            icon: SiTnt
        }
    ];

    return (
        <div className="bg-gray-100 py-24 w-full mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <partner.icon className="text-8xl text-gray-700 mb-2" />
                            <p className="text-sm text-gray-700 hidden md:block">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnershipSection;
