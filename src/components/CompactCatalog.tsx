import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Plus, Minus } from 'lucide-react';

const CompactCatalog: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    // Filter "Hero" products (e.g., Glambot, Mirror Black, 360)
    const heroProducts = PRODUCTS.filter(p => ['glambot', 'mirror-black', 'plataforma-360'].includes(p.id));

    // Filter the rest, EXCLUDING the hero products to avoid duplicates
    const otherProducts = PRODUCTS.filter(p => !['glambot', 'mirror-black', 'plataforma-360'].includes(p.id));

    // Display all if showAll is true, otherwise slice
    const displayedProducts = showAll ? otherProducts : otherProducts.slice(0, 4);

    return (
        <section id="catalog" className="py-24 bg-enyoik-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-enyoik-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Nuestro Arsenal</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Experiencias <span className="italic text-gradient-gold">Destacadas</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Lo último en tecnología para eventos. Desde clásicos reinventados hasta innovaciones virales.
                    </p>
                </div>

                {/* Hero Products (Big Cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {heroProducts.map((product) => (
                        <Link to={`/producto/${product.id}`} key={product.id} className="group relative h-[500px] rounded-3xl overflow-hidden block border border-white/10 hover:border-enyoik-gold/50 transition-colors">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-enyoik-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        Top Seller
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-enyoik-gold transition-colors">{product.name}</h3>
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{product.shortDescription}</p>
                                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white">
                                    <span className="border-b border-white pb-1 group-hover:border-enyoik-gold transition-colors">Ver Experiencia</span>
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Rest of Catalog (Compact Grid) */}
                <div className="border-t border-white/10 pt-20">
                    <div className="flex justify-between items-end mb-12">
                        <h3 className="text-3xl font-serif text-white">Catálogo Completo</h3>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="hidden md:flex items-center gap-2 text-enyoik-gold font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                        >
                            {showAll ? <><Minus size={16} /> Ver Menos</> : <><Plus size={16} /> Ver Todo</>}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {displayedProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={product.id}
                                    className="group"
                                >
                                    <Link to={`/producto/${product.id}`} className="block bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors border border-white/5 hover:border-enyoik-gold/30">
                                        <div className="aspect-square relative overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {/* Tag Overlay */}
                                            <div className="absolute top-3 left-3 z-10">
                                                {product.category === 'innovator' && (
                                                    <span className="px-2 py-1 bg-black/60 backdrop-blur rounded text-[9px] font-bold uppercase tracking-widest text-white border border-white/20">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-serif text-white mb-1 truncate">{product.name}</h4>
                                            <p className="text-gray-500 text-xs uppercase tracking-widest">{product.category === 'innovator' ? 'Innovación' : 'Clásica'}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="w-full py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all"
                        >
                            {showAll ? 'Ver Menos' : 'Ver Todo el Catálogo'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompactCatalog;
