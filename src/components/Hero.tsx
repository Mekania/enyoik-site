import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background with Parallax effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
                <img
                    src="/images/social/img_0295.jpg"
                    alt="Enyoik Experience Video Booth"
                    className="w-full h-full object-cover opacity-80"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <div className="flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-gold">
                        <Star size={14} fill="currentColor" />
                        <span>Premium Photo Booth Experience</span>
                        <Star size={14} fill="currentColor" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-serif max-w-6xl mx-auto leading-[0.9] mb-8"
                >
                    Tu Evento, <span className="italic text-gradient-gold">Inolvidable</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12"
                >
                    Más que fotos, creamos experiencias de alto impacto. <br className="hidden md:block" />
                    La fusión perfecta entre <strong className="text-white">elegancia</strong> y <strong className="text-white">diversión viral</strong>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#products" className="btn-gold group flex items-center">
                        Ver Catálogo
                        <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            &rarr;
                        </motion.span>
                    </a>
                    <a href="#gallery" className="px-8 py-3 bg-white/5 border border-white/20 backdrop-blur-sm rounded-full font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
                        Echa un vistazo
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements (The "Fun" part) */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold/10 blur-[120px] rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
