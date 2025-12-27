import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const teamMembers = [
    { image: '/club-members/Rectangle 1.png' },
    { image: '/club-members/Rectangle 2.png' },
    { image: '/club-members/Rectangle 3.png' },
    { image: '/club-members/Rectangle 4.png' },
    { image: '/club-members/Rectangle 5.png' },
    { image: '/club-members/Rectangle 6.png' },
    { image: '/club-members/Rectangle 7.png' },
    { image: '/club-members/Rectangle 8.png' },
    { image: '/club-members/Rectangle 9.png' },
    { image: '/club-members/Rectangle 10.png' },
    { image: '/club-members/Rectangle 11.png' },
    { image: '/club-members/Rectangle 12.png' },
    { image: '/club-members/Rectangle 13.png' },
    { image: '/club-members/Rectangle 14.png' },
    { image: '/club-members/Rectangle 15.png' },
    { image: '/club-members/Rectangle 16.png' },
    { image: '/club-members/Rectangle 17.png' },
    { image: '/club-members/Rectangle 18.png' },

];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full min-h-screen text-white overflow-x-hidden relative"
        >
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <img src="/star-background.jpg" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10">

                {/* Hero Section */}
                <div className="container mx-auto px-4 lg:px-24 pt-10 md:pt-20 pb-20">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold uppercase font-montserrat tracking-wide mb-10 md:mb-20">
                        About Us.
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-5 items-center px-5">
                        {/* Club Logo Graphic */}
                        <div className="flex justify-center md:justify-start mx-auto max-w-xl">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative w-64 h-64 md:w-96 md:h-96"
                            >
                                <img
                                    src="/images/Dhruva-Final-(2) 1.png"
                                    alt="Dhruva Club Logo"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="font-poppins text-gray-200 text-sm md:text-base leading-relaxed text-start! md:text-right space-y-4 flex-1 lg:px-20">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat. Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu
                                Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat ques eu rhoncus consequat.
                            </p>
                        </div>
                    </div>

                    {/* Drifting Moon */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="absolute top-40 right-0 lg:-right-10 w-32 md:top-80 lg:top-[22%] md:right-0 md:w-64 lg:w-70 z-1 opacity-80 hidden lg:block"
                    >
                        <img src="/moon.svg" alt="Moon" className="w-full h-auto" />
                    </motion.div>
                </div>

                {/* Group Photo Section */}
                <div className="w-full mb-20 bg-zinc-900/50">
                    <img
                        src="/images/about-hero.jpg"
                        alt="Club Group Photo"
                        className="w-full h-[40vh] md:h-[70vh] object-cover object-center transition-all duration-700 ease-in-out"
                    />
                </div>

                {/* Team Leaders Section */}
                <div className="container mx-auto px-4 lg:px-24 mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase font-montserrat">
                            Team Leaders of Our Club
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-800 border border-white/10">
                                    <img
                                        src={member.image}
                                        alt={`Team member ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Name</h3>
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400">Post</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Section */}
                <Footer />
            </div>
        </motion.div>
    );
};

export default About;
