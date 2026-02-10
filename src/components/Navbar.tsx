import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone as WhatsApp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CITIES } from '../data';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [cabinasOpen, setCabinasOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
        setEventsOpen(false);
        setCabinasOpen(false);
        window.scrollTo(0, 0);
    }

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-8 md:top-8'} ${scrolled || location.pathname !== '/'
                    ? 'bg-enyoik-black/95 backdrop-blur-lg py-3 shadow-xl'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="relative group" onClick={handleLinkClick}>
                            <img
                                src="/images/logo-enyoik.png"
                                alt="Enyoik"
                                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium tracking-widest uppercase hover:text-enyoik-gold transition-colors duration-300">Inicio</Link>

                        {/* Cabinas Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setCabinasOpen(true)}
                            onMouseLeave={() => setCabinasOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-sm font-medium tracking-widest uppercase hover:text-enyoik-gold transition-colors duration-300">
                                <span>Cabinas</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${cabinasOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {cabinasOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden py-2"
                                    >
                                        <Link to="/cabinas-clasicas" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-enyoik-gold" onClick={handleLinkClick}>
                                            Clásicas
                                        </Link>
                                        <Link to="/innovacion" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-enyoik-gold" onClick={handleLinkClick}>
                                            Innovación
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Eventos Dropdown (Cities) */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setEventsOpen(true)}
                            onMouseLeave={() => setEventsOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-sm font-medium tracking-widest uppercase hover:text-enyoik-gold transition-colors duration-300">
                                <span>Eventos</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${eventsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {eventsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-56 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden py-2"
                                    >
                                        <Link to="/eventos" className="block px-4 py-3 text-sm font-bold text-enyoik-gold border-b border-white/10 hover:bg-white/5" onClick={handleLinkClick}>
                                            Ver todos
                                        </Link>
                                        {CITIES.map(city => (
                                            <Link
                                                key={city.id}
                                                to={`/eventos/${city.slug}`}
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                                                onClick={handleLinkClick}
                                            >
                                                {city.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/servicios" className="text-sm font-medium tracking-widest uppercase hover:text-enyoik-gold transition-colors duration-300">Servicios</Link>
                        <Link to="/contacto" className="text-sm font-medium tracking-widest uppercase hover:text-enyoik-gold transition-colors duration-300">Contacto</Link>

                        <a
                            href="https://wa.me/573215518719"
                            className="px-6 py-2 bg-enyoik-gold text-black text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            RESERVAR
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-enyoik-gold transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-FULL left-0 w-full bg-black border-t border-white/10 shadow-2xl lg:hidden h-screen overflow-y-auto pb-40"
                    >
                        <div className="px-4 pt-4 space-y-2">
                            <Link to="/" onClick={handleLinkClick} className="block text-xl font-serif py-3 border-b border-white/5 text-white">Inicio</Link>

                            <div className="py-3 border-b border-white/5">
                                <span className="block text-xl font-serif text-enyoik-gold mb-2">Cabinas</span>
                                <Link to="/cabinas-clasicas" onClick={handleLinkClick} className="block pl-4 py-2 text-gray-400">Clásicas</Link>
                                <Link to="/innovacion" onClick={handleLinkClick} className="block pl-4 py-2 text-gray-400">Innovación</Link>
                            </div>

                            <div className="py-3 border-b border-white/5">
                                <span className="block text-xl font-serif text-enyoik-gold mb-2">Eventos en...</span>
                                {CITIES.map(city => (
                                    <Link key={city.id} to={`/eventos/${city.slug}`} onClick={handleLinkClick} className="block pl-4 py-2 text-gray-400">{city.name}</Link>
                                ))}
                            </div>

                            <Link to="/servicios" onClick={handleLinkClick} className="block text-xl font-serif py-3 border-b border-white/5 text-white">Servicios</Link>
                            <Link to="/contacto" onClick={handleLinkClick} className="block text-xl font-serif py-3 border-b border-white/5 text-white">Contacto</Link>

                            <div className="flex justify-center space-x-8 pt-6">
                                <a href="#" className="text-white hover:text-enyoik-gold"><Instagram size={24} /></a>
                                <a href="#" className="text-white hover:text-enyoik-gold"><Facebook size={24} /></a>
                                <a href="#" className="text-white hover:text-enyoik-gold"><WhatsApp size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
