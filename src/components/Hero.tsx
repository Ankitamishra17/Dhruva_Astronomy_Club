import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[700px] flex flex-col px-8 md:px-24 overflow-hidden py-20">
            {/* Left Content */}
            <div className="z-10 w-full flex flex-col items-start gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl lg:md:text-[5rem] font-black leading-[1.1] tracking-wide font-montserrat uppercase text-white shadow-black drop-shadow-lg">
                        Let’s Travel To The Edge <br /> Of Space
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl text-gray-300 text-sm md:text-base leading-relaxed tracking-wide font-poppins font-semibold"
                >
                    We are a group that love to explore and learn new information related to our universe.
                    Join us and Explore
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 border border-white px-10 py-4 text-[0.7rem] font-bold tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-300 uppercase font-montserrat cursor-pointer"
                >
                    Discover More
                </motion.button>
            </div>

            {/* Right Moon */}
            <div className="absolute right-10 top-[40%] translate-y-1/2 lg:md:right-48 lg:md:top-10 w-[220px] md:w-[350px] h-auto pointer-events-none opacity-100 z-0">
                <motion.img
                    animate={{ rotate: 360 }}
                    transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                    src="/moon.svg"
                    alt="Moon"
                    className="w-full h-full object-contain grayscale brightness-125"
                />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute right-12 bottom-32 hidden md:flex flex-col items-center gap-4">
                <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase -rotate-90 origin-center text-gray-400 whitespace-nowrap">Scroll  .....</span>
            </div>
        </section>
    );
};

export default Hero;
