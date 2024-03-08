import React from 'react';
import { FaEnvelope, FaRegEnvelope, FaPhone } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';

const ContacthtmlForm: React.FC = () => {
    const contactDetails = [
        {
            icon: <FaEnvelope />,
            title: 'Technical support',
            email: 'support@example.com',
            phone: '+1 234-567-89'
        },
        {
            icon: <FaRegEnvelope />,
            title: 'Sales questions',
            email: 'sales@example.com',
            phone: '+1 234-567-89'
        },
        {
            icon: <FaPhone />,
            title: 'Press',
            email: 'press@example.com',
            phone: '+1 234-567-89'
        }
    ];
    return (
        <div className="w-full my-12 mx-auto px-2 md:px-4">

            <section className="mb-32 w-full max-w-6xl mx-auto">
                <div className="flex justify-center">
                    <div className="text-center w-full px-4 md:max-w-3xl lg:max-w-5xl mb-20">
                        <h2 className="mb-5 px-6 text-2xl lg:text-4xl font-bold">
                            Contact Form
                        </h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            We'd love to hear from you! Whether you have questions about our services, want to provide feedback, or just want to say hello, feel free to reach out. Our team is here to assist you seamlessly and ensure you receive a prompt response.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-20 lg:gap-10">
                    <div className="flex flex-wrap">
                        <div className="p-1.5 sm:p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-dark2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-1.5 sm:p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-dark2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-1.5 sm:p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-dark2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-1.5 sm:p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="phone"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Phone
                                </label>
                                <input
                                    type="email"
                                    id="phone"
                                    name="phone"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-dark2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-dark2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full flex justify-start">
                            <button className="flex items-center gap-2 text-white bg-dark border-0 py-3 px-10 focus:outline-none hover:bg-dark2 rounded text-lg">
                                <span>Send your message</span> <TbSend />
                            </button>
                        </div>
                    </div>

                    <div className="w-full p-4">
                        <div className="flex flex-wrap gap-12">
                            {contactDetails.map((contact, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    <div className="inline-block rounded-md mt-1 text-gray-800">
                                        {contact.icon}
                                    </div>
                                    <div className="grow">
                                        <p className="font-bold">
                                            {contact.title}
                                        </p>
                                        <p className="text-dark3 text-sm">
                                            {contact.email}
                                        </p>
                                        <p className="text-dark3 text-sm">
                                            {contact.phone}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContacthtmlForm;
