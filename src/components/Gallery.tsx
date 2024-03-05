import React from 'react';
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'

const Gallery: React.FC = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className='w-full mx-auto bg-gray-800 pt-16 pb-8'>
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Cargo Export Gallery</h2>
                <p className="text-snow mt-2 text-sm md:text-base">Explore our cargo export showcases.</p>
            </div>
            <div className="gap-4 grid grid-cols-1 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 w-full max-w-7xl mx-auto py-20">
                {images.map((image, index) => (
                    <div key={index}>
                        <img className="object-cover object-center w-full h-80 max-w-full rounded border border-gray-600" src={image} alt={`gallery-photo-${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;
