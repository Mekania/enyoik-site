import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Camera } from 'lucide-react';

const HeroSplit: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-enyoik-black">
            {/* Left Side: Elegant */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 lg:p-16 z-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-enyoik-gold"></span>
                        <span className="text-enyoik-gold text-sm font-bold uppercase tracking-[0.3em]">Premium Photo Booths</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9]">
                        Transformamos <br />
                        <span className="italic text-gradient-gold">Momentos</span>
                        <br /> en Recuerdos <br />
                        <span className="font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Inolvidables.</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md leading-relaxed">
                        Creamos experiencias visuales de alto impacto donde la elegancia y la diversión se encuentran.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link to="/innovacion" className="btn-gold flex items-center gap-3 group">
                            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                            Ver Innovación
                        </Link>
                        <Link to="/cabinas-clasicas" className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3">
                            <Camera size={20} />
                            Ver Clásicos
                        </Link>
                    </div>
                </motion.div>

                {/* Background Pattern for Left Side */}
                <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-enyoik-black to-transparent"></div>
            </div>

            {/* Right Side: Fun/Visual */}
            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    {/* Placeholder for a dynamic video loop or high-energy image */}
                    <img
                        src="/images/BODA1.jpg?v=2"
                        alt="Enyoik Fun Experience"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/images/corporate/event_1.jpg"; // Fallback
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-enyoik-black lg:via-enyoik-black/20"></div>
                </motion.div>

                {/* Floating Elements on Top */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-20 glass-card-light hidden lg:block max-w-xs"
                >
                    <p className="text-black font-serif italic text-lg">"La mejor inversión de nuestra boda. ¡Los videos quedaron increíbles!"</p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-black/60">Camila & Andrés</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSplit;
