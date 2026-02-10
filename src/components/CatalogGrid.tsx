import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const CatalogGrid: React.FC = () => {
    return (
        <section id="products" className="py-32 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <span className="text-enyoik-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                        Nuestra Colección
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">
                        Elige tu <span className="italic text-gradient-gold">Experiencia</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Cada cabina está diseñada para ser el centro de atención. Desde la elegancia clásica hasta la innovación viral.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-32">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-enyoik-gold/20 to-transparent' : 'from-transparent to-enyoik-gold/20'} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Decorative Number */}
                                <div className={`absolute -top-12 ${index % 2 === 0 ? '-left-8' : '-right-8'} text-9xl font-serif text-white/5 select-none -z-10`}>
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex gap-2 mb-4">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-enyoik-gold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif text-white">
                                    {product.name}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {product.description}
                                </p>

                                <ul className="space-y-3 pb-4">
                                    {product.features?.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-400">
                                            <Star size={12} className="text-enyoik-gold mr-3" fill="currentColor" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-6 pt-4">
                                    <Link
                                        to={`/producto/${product.id}`}
                                        className="btn-gold group flex items-center gap-2"
                                    >
                                        Ver Detalles
                                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <a
                                        href="https://wa.me/573215518719"
                                        className="text-white hover:text-enyoik-gold font-bold text-sm uppercase tracking-widest transition-colors"
                                    >
                                        Cotizar express
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogGrid;
