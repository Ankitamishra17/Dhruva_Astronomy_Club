import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Event = () => {
    return (
        <div className="w-full min-h-screen text-white overflow-x-hidden pb-10 ">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] md:px-24">
                <img
                    src="/images/event-hero.jpg"
                    alt="Astronaut Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-4 md:left-24 md:bottom-20 max-w-5xl">
                    <h1 className="text-4xl md:text-7xl font-extrabold uppercase font-montserrat leading-tight tracking-wide">
                        Our Stargazers<br />Spectacle
                    </h1>
                    <p className="text-right w-full text-sm md:text-xl font-bold tracking-widest uppercase mt-2 md:pl-2">
                        A journey through the cosmos
                    </p>
                </div>
            </div>

            {/* Recent Events Title */}
            <div className="relative py-20 text-center lg:px-24">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase font-montserrat z-10 relative">
                    Recent Events
                </h2>

                {/* Floating Moon */}
                <div className="absolute top-1/2 lg:top-1/3 left-4 md:left-0 w-32 md:w-64 lg:w-72 opacity-90 z-10 pointer-events-none">
                    <img src="/moon.svg" alt="Moon" className="w-full h-auto drop-shadow-2xl" />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-24 mb-32 space-y-32">
                {/* Event #1: Dark Matter */}
                <div className="relative">
                    <div className="absolute -right-4 -top-10 md:-right-10 text-xl font-bold text-gray-400"># 1</div>

                    {/* Background Image Container */}
                    <div className="w-full md:w-[70%] h-[400px] md:h-[500px] relative overflow-hidden">
                        <img
                            src="/images/event-bg-2.jpg"
                            alt="Dark Matter"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative md:absolute md:top-1/2 lg:top-[65%] md:-translate-y-1/2 md:right-0 md:mr-10 bg-white/30 backdrop-blur-md border border-white/10 px-2 py-8 md:p-10 lg:px-4 lg:py-10 w-full md:w-[500px]"
                    >
                        <span className="block text-xs font-bold tracking-widest mb-2">18/06/2023</span>
                        <h3 className="text-2xl font-bold uppercase font-montserrat mb-4 leading-tight">
                            Talk on Dark Matter
                        </h3>
                        <p className="text-xs md:text-sm text-gray-200 mb-6 leading-relaxed font-poppins">
                            Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan temper bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan temper bibendum amet.
                        </p>
                        <button className="bg-white text-black text-xs font-bold uppercase py-2 px-6 tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Event #2: Astronauts */}
                <div className="relative flex flex-col md:flex-row justify-end">
                    <div className="absolute -left-4 -top-10 md:-left-10 text-xl font-bold text-gray-400"># 2</div>

                    {/* Background Image Container */}
                    <div className="w-full md:w-[70%] h-[400px] md:h-[500px] relative overflow-hidden">
                        <img
                            src="/images/event-bg-3.png"
                            alt="Astronauts"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative md:absolute md:top-1/2 lg:top-[60%] md:-translate-y-1/2 md:left-0 md:ml-[10%] bg-white/30 backdrop-blur-md border border-white/10 p-4 md:p-6 lg:py-10 w-full md:w-[500px]"
                    >
                        <span className="block text-xs font-bold tracking-widest mb-2">18/06/2023</span>
                        <h3 className="text-2xl font-bold uppercase font-montserrat mb-4 leading-tight">
                            Astronauts We Know
                        </h3>
                        <p className="text-xs md:text-sm text-gray-200 mb-6 leading-relaxed font-poppins">
                            Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan temper bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan temper bibendum amet.
                        </p>
                        <button className="bg-white text-black text-xs font-bold uppercase py-2 px-6 tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Strip */}
            <div className="flex no-scrollbar overflow-x-auto gap-5 px-4 md:px-24 mb-20 w-screen relative inset-0">
                <img src="/images/Rectangle 49.png" alt="Gallery 1" className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/Rectangle 51.png" alt="Gallery 2" className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/Rectangle 52.png" alt="Gallery 3" className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/Rectangle 53.png" alt="Gallery 4" className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-opacity" />
                <img src="/images/Rectangle 50.png" alt="Gallery 5" className="w-full h-40 object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Event;
