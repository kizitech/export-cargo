import React from 'react';

interface Statistic {
    title: string;
    value: string | number;
}

const statistics: Statistic[] = [
    { title: 'Destinations Covered', value: '1000+' },
    { title: 'On-Time Delivery', value: '98%' },
    { title: 'Customer Support', value: '24/7' },
    { title: 'Happy Customers', value: 12558 },
    { title: 'Complete Work', value: 1145 },
    { title: 'Our Awards', value: 186 }
];

const StatisticSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16 w-full mx-auto">
            <div className="container mx-auto px-4 w-full max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Export Cargo: Connecting the World</h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base mb-20">Providing seamless cargo transportation solutions worldwide.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {statistics.map((statistic, index) => (
                        <div key={index} className="bg-white p-8 text-center">
                            <h3 className="text-5xl font-black text-gray-800 mb-4">{statistic.value}</h3>
                            <p className="text-gray-600">{statistic.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatisticSection;
