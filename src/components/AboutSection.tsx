import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="w-full py-24 px-2 md:px-24 flex flex-col gap-28 relative z-10">

            {/* Separator / Title */}
            <div className="w-full text-center">
                <h3 className="text-sm md:text-base tracking-[0.4em] font-medium uppercase text-gray-200 font-montserrat">
                    Know More About Us Here
                </h3>
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-col justify-between md:flex-row items-center gap-12 md:gap-12 ">
                {/* Left Circular Logo with specific glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative size-64 md:size-72 shrink-0"
                >
                    {/* Blue Glow Effect behind logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[60px]" />

                    <img
                        src="/images/Dhruva-Final-(2) 1.png"
                        alt="Dhruva Club Emblem"
                        className="relative w-full h-full object-contain rounded-full drop-shadow-2xl z-10"
                    />
                </motion.div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex-col gap-10 text-left px-4"
                >
                    <h2 className="text-2xl md:text-[2.5rem] font-bold font-montserrat uppercase leading-[1.2] tracking-wider text-white">
                        We are club that learn, share and explore everything related to our universe.
                    </h2>
                    <p className="text-gray-300 text-[1rem] md:text-md leading-7 tracking-wide uppercase font-semibold mt-6 font-montserrat">
                        Dhruva is a college club, we work toward increasing knowledge about space, cosmos and everything we are still learning about. We share and learn together.
                    </p>
                </motion.div>
            </div>

            {/* Quote Section */}


        </section>
    );
};

export default AboutSection;
