import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full px-8 md:px-24 py-8 mt-auto relative">
            <div className="text-[0.65rem] tracking-widest font-montserrat text-gray-200">

                <div className="text-center mb-20 w-full">
                    <h3 className="text-sm md:text-base font-bold font-montserrat uppercase tracking-widest">
                        "Astronomy compels the soul to look upwards and leads us from this world to another"
                    </h3>
                </div>

                {/* Center Navigation - Simple Text Links */}
                <ul className="flex gap-8 opacity-80 flex-col md:flex-row justify-center my-5">
                    <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
                    <li><NavLink to="/experts" className="hover:text-white transition-colors">Experts</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-white transition-colors">About us</NavLink></li>
                    <li><NavLink to="/podcasts" className="hover:text-white transition-colors">Podcasts</NavLink></li>
                    <li><NavLink to="/contacts" className="hover:text-white transition-colors">Contacts</NavLink></li>
                </ul>

                {/* Right */}

                <div className='flex justify-between items-center w-full'>
                    {/* Left */}
                    <div className="flex items-center gap-3 text-gray-100 hover:text-white cursor-pointer transition-colors group">
                        <svg className="w-3 h-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Let's chat</span>
                    </div>
                    <a href="mailto:info@logoipsum.com" className="hover:text-white transition-colors flex items-center gap-3 group">
                        <svg className="w-3 h-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        info@logoipsum.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
