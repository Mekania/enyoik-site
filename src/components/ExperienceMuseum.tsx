import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceMuseum: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="products" className="py-32 bg-black overflow-hidden relative" ref={containerRef}>
            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
                >
                    Curaduría de Experiencias
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    El Museo <span className="italic text-gradient-gold">Enyoik</span>
                </motion.h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    No alquilamos máquinas, curamos momentos inolvidables. Desliza para explorar nuestro catálogo de innovación.
                </p>
            </div>

            <div className="flex overflow-x-auto pb-20 px-[5vw] no-scrollbar snap-x snap-mandatory gap-8 relative z-10">
                {PRODUCTS.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/10] relative group snap-center rounded-[2rem] overflow-hidden"
                    >
                        {/* Background Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl md:text-5xl font-serif text-white mb-3">
                                {product.name}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base max-w-md line-clamp-2 mb-6 transition-all duration-300 group-hover:line-clamp-none">
                                {product.shortDescription}
                            </p>

                            <div className="flex items-center space-x-6">
                                <Link to={`/producto/${product.id}`} className="flex items-center space-x-2 text-gold font-bold text-sm uppercase tracking-widest group/btn">
                                    <span>Detalles</span>
                                    <div className="w-8 h-[2px] bg-gold origin-left transition-all duration-300 group-hover/btn:w-12"></div>
                                    <ArrowRight size={18} />
                                </Link>
                                <a href="https://wa.me/573215518719" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                    Cotizar ahora
                                </a>
                            </div>
                        </div>

                        {/* Premium Detail Element */}
                        <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                            <span className="text-white text-lg font-serif">0{index + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative text */}
            <div className="absolute bottom-10 left-0 w-full pointer-events-none opacity-[0.02] text-[15rem] font-serif select-none whitespace-nowrap overflow-hidden leading-none">
                MOMENTOS MEMORABLES ENYOIK PREMIUM
            </div>
        </section>
    );
};

export default ExperienceMuseum;
