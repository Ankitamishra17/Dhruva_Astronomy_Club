import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavLinkT = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLinkT[] = [
  { label: "home", href: "/" },
  { label: "events", href: "/events" },
  { label: "podcast", href: "/podcasts" },
  { label: "about", href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full px-4 md:px-24 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? "bg-white/20 backdrop-blur-xl" : "bg-transparent"}`}
    >
      {/* LOGO */}
      <NavLink to="/" className="flex flex-col leading-none text-white">
        <h1 className="text-2xl font-extrabold tracking-widest font-montserrat">
          DHRUVA
        </h1>
        <span className="text-[0.6rem] tracking-[0.2em] font-light text-gray-300">
          ASTRONOMY CLUB
        </span>
      </NavLink>

      {/* DESKTOP NAV LINKS */}
      <ul className="hidden md:flex gap-10 md:gap-16 pt-1">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                `text-xs font-bold tracking-widest uppercase font-montserrat transition-colors
                 hover:text-neutral-400 ${
                   isActive ? "text-white" : "text-gray-300"
                 }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="block md:hidden text-white text-[0.6rem] font-bold tracking-[0.2em]
                   font-montserrat uppercase hover:text-gray-300 transition-colors"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 w-full h-screen bg-zinc-900
                       flex flex-col gap-10 px-10 py-6 text-white"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center">
              <img src="/logo.svg" alt="logo" className="w-16" />
              <button
                className="text-[0.6rem] tracking-[0.2em] font-bold uppercase
                           text-gray-300 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            {/* MOBILE LINKS */}
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-xs font-bold tracking-widest uppercase font-montserrat transition-colors
                     hover:text-neutral-400 ${
                       isActive ? "text-white" : "text-gray-300"
                     }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
