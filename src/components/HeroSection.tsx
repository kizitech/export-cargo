import { TbTruckDelivery } from "react-icons/tb";
import warehouse from "../assets/warehouse.jpg"

const HeroSection = () => {
    return (
        <section>
            <div className="relative overflow-hidden bg-cover bg-no-repeat min-h-screen" style={{ backgroundPosition: '50%', backgroundImage: `url(${warehouse})`, height: '500px' }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                    <div className="flex flex-col gap-5 h-full items-center justify-center">
                        <a href="#" className="hidden sm:inline-flex justify-between items-center py-1 px-1 pr-4 mx-4 mb-7 text-sm bg-snow rounded-full text-dark hover:bg-gray-200 mt-10" role="alert">
                            <span className="text-xs bg-gray-700 rounded-full text-white px-4 py-1.5 mr-3">Fast Shipping</span> <span className="text-sm font-medium text-dark">Explore our latest routes and services</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        <div className="px-4 text-center text-white md:px-12">
                            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                Reliable Cargo Solutions <br /><span>for Your Export Needs</span>
                            </h1>
                            <p className="mb-10 text-lg text-gray-300 w-full max-w-2xl mx-auto">Export Cargo offers seamless shipping services to ensure your products reach their destination safely and on time. From air freight to sea cargo, we've got you covered.</p>
                            <button
                                type="button"
                                className="flex items-center gap-2 mx-auto rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 bg-neutral-100 bg-opacity-10 hover:bg-opacity-90 hover:text-gray-700 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <span>Track Your Cargo Now!</span> <TbTruckDelivery size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;