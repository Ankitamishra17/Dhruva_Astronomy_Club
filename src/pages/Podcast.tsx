
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Podcast = () => {
    const podcastList = [
        { id: 1, img: '/images/podcast-1.jpg', title: 'PODCAST NAME', hashtag: '#HASHTAG' },
        { id: 2, img: '/images/podcast-2.jpg', title: 'PODCAST NAME', hashtag: '#HASHTAG' },
        { id: 3, img: '/images/podcast-3.jpg', title: 'PODCAST NAME', hashtag: '#HASHTAG' },
        { id: 4, img: '/images/podcast-4.png', title: 'PODCAST NAME', hashtag: '#HASHTAG' },
    ];

    return (
        <div className="w-full min-h-screen text-white overflow-x-hidden pb-10">
            {/* Header Section */}
            <div className="mt-10 md:pt-20 pb-10 text-center relative z-10">
                <h1 className="text-5xl md:text-9xl lg:text-[14vw] font-black uppercase font-montserrat tracking-wider flex justify-center items-center gap-2 md:gap-2">
                    <span>P</span>
                    <img src="/moon-1.svg" alt="O" className="size-16 md:size-32 inline-block animate-pulse-slow" />
                    <span>DCASTS</span>
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-24 mb-32">
                {/* Featured Podcasts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-32">
                    {/* Featured Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden group"
                    >
                        <img src="/images/podcast-mic-1.jpg" alt="Microphone 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-gray-400">Available on</div>
                            <div className="flex items-center gap-2 text-xl font-bold font-montserrat">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <span>YouTube</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden group"
                    >
                        <img src="/images/podcast-mic-2.jpg" alt="Microphone 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 text-gray-400">Available on</div>
                            <div className="flex items-center gap-2 text-xl font-bold font-montserrat">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <span>YouTube</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Podcast of the Week */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase font-montserrat leading-tight tracking-wide">
                            Podcast of<br />the Week
                        </h2>
                    </div>
                    <div className="flex-1 max-w-xl mt-2">
                        <p className="text-normal text-gray-300 leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
                        </p>
                        <button className="flex items-center gap-2 border border-white/30 rounded px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all group">
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Podcast List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    {podcastList.map((podcast, index) => (
                        <div key={podcast.id} className="group cursor-pointer">
                            <div className="flex items-center gap-6 pb-8 border-b-2 border-gray-700 group-hover:border-white/50 transition-colors">
                                <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                                    0{index + 1}.
                                </span>
                                <div className="size-20 rounded-md overflow-hidden bg-gray-800">
                                    <img src={podcast.img} alt={podcast.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase font-montserrat tracking-wide">{podcast.title}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium tracking-wider mt-1">{podcast.hashtag}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Podcast;
