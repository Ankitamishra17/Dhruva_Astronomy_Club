import { motion } from 'framer-motion';

const RecentEvents = () => {
    return (
        <section className="w-full py-20 px-4 md:px-24 flex flex-col gap-12 relative z-10">
            <h2 className="text-xl font-bold tracking-[0.2em] lg:md:text-2xl uppercase font-montserrat text-white text-left pl-2">Recent Events</h2>

            <div
                className="relative w-full h-[600px] rounded-sm overflow-hidden bg-cover bg-center box-border border border-white/10"
                style={{ backgroundImage: "url('/images/event-bg-1.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-transparent to-transparent mix-blend-overlay" />

                {/* Floating Glass Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 right-0 md:right-16 transform -translate-y-1/2 w-full max-w-[500px] px-5 py-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                    <span className="text-[0.65rem] font-bold tracking-widest text-gray-300 block mb-3 uppercase font-montserrat">15/05/2023</span>
                    <h3 className="text-3xl font-extrabold font-montserrat uppercase mb-6 leading-none tracking-wide text-white">Talk on Cosmic Nebula</h3>
                    <p className="text-[0.8rem] text-gray-200 leading-relaxed mb-8 font-poppins font-light opacity-80">
                        Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                        Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                    </p>
                    <button className="bg-white text-black px-8 py-3 text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:bg-gray-200 transition-colors font-montserrat">
                        Read More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default RecentEvents;
