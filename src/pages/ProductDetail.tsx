import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Ruler, Zap, Users, Clock } from 'lucide-react';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return <div className="h-screen flex items-center justify-center text-white">Producto no encontrado</div>;

    return (
        <main className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-gold hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
                    <ArrowLeft size={16} className="mr-2" /> Volver al Catálogo
                </Link>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden group">
                            <img src={product.image} alt={product.name} className="w-full h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{product.name}</h1>
                                    <div className="flex gap-2">
                                        {product.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-gold text-black text-[10px] font-bold rounded-full uppercase tracking-tighter">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2 space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl font-serif text-gold mb-6 italic">Descripción de la Experiencia</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
                        </div>

                        {product.features && (
                            <div>
                                <h3 className="text-xl font-serif mb-6 uppercase tracking-widest">Lo que Incluye</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map(f => (
                                        <div key={f} className="flex items-center space-x-3 text-gray-400">
                                            <CheckCircle2 size={18} className="text-gold shrink-0" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.specs && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                                <div className="text-center">
                                    <Ruler size={24} className="mx-auto mb-3 text-gold" />
                                    <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Espacio</span>
                                    <span className="text-xs font-bold">{product.specs.space}</span>
                                </div>
                                <div className="text-center">
                                    <Zap size={24} className="mx-auto mb-3 text-gold" />
                                    <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Energía</span>
                                    <span className="text-xs font-bold">{product.specs.power}</span>
                                </div>
                                <div className="text-center">
                                    <Users size={24} className="mx-auto mb-3 text-gold" />
                                    <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Capacidad</span>
                                    <span className="text-xs font-bold">{product.specs.capacity}</span>
                                </div>
                                <div className="text-center">
                                    <Clock size={24} className="mx-auto mb-3 text-gold" />
                                    <span className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Montaje</span>
                                    <span className="text-xs font-bold">{product.specs.setupTime}</span>
                                </div>
                            </div>
                        )}

                        <div className="pt-8">
                            <a
                                href="https://wa.me/573215518719"
                                className="w-full btn-gold py-5 flex items-center justify-center text-lg uppercase tracking-widest"
                            >
                                Reservar Ahora
                            </a>
                            <p className="text-center text-gray-500 text-xs mt-4 uppercase tracking-tighter">
                                Consulta disponibilidad para tu fecha
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
