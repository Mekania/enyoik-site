import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, CITIES } from '../data';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const CityLanding: React.FC = () => {
    const { city } = useParams<{ city: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [city]);

    const cityData = CITIES.find(c => c.slug === city) || CITIES[0]; // Fallback to Bogota if not found
    const cityName = cityData ? cityData.name : 'Colombia';

    // Filter products - showing 'innovator' first then 'classic'
    const featuredProducts = PRODUCTS.filter(p => p.category === 'innovator').slice(0, 3);
    const classicProducts = PRODUCTS.filter(p => p.category === 'classic').slice(0, 3);

    return (
        <main className="bg-black min-h-screen">
            {/* Hero City */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={cityData.heroImage}
                        alt={`Eventos en ${cityName}`}
                        className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-enyoik-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Cobertura Nacional
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight"
                    >
                        {cityData.title}
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
                        {cityData.description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="https://wa.me/573215518719" className="btn-gold inline-flex items-center gap-2 justify-center">
                            Cotizar en {cityName}
                        </a>
                        <Link to="/innovacion" className="px-8 py-3 bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white hover:text-black rounded-full font-bold transition-all text-center">
                            Ver Catálogo Completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Hire Us in City */}
            <section className="py-24 container mx-auto px-4 bg-black/50">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif text-white mb-6">Expertos en Eventos en {cityName}</h2>
                        <ul className="space-y-6">
                            {[
                                `Conocemos los mejores salones de ${cityName}.`,
                                "Logística puntual y transporte incluido en zona urbana.",
                                "Staff local capacitado para una atención de lujo.",
                                "Personalización total con la temática de tu fiesta."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 rounded-full text-enyoik-gold flex-shrink-0">
                                        <CheckCircle size={20} />
                                    </div>
                                    <p className="text-gray-300 text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-enyoik-gold/10 blur-2xl rounded-full" />
                        <img src="/images/innovators/360_aereo.jpg" alt="Video Booth 360" className="relative rounded-3xl z-10 border border-white/10" />
                    </div>
                </div>
            </section>

            {/* Innovacion List */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-enyoik-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Tendencia</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Lo más pedido en {cityName}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <Link to={`/producto/${product.id}`} key={product.id} className="group block glass-card overflow-hidden p-0 border-0 hover:border-enyoik-gold/50 transition-all">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{product.shortDescription}</p>
                                        <div className="flex items-center text-enyoik-gold text-sm font-bold tracking-widest uppercase">
                                            <span>Ver detalles</span>
                                            <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Classics List */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Clásicos que no fallan</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Cabinas de Fotos Tradicionales</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {classicProducts.map(product => (
                            <Link to={`/producto/${product.id}`} key={product.id} className="group block glass-card border-none bg-transparent hover:bg-white/5 p-4 transition-all">
                                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{product.shortDescription}</p>
                                <span className="text-white/60 group-hover:text-white border-b border-transparent group-hover:border-white transition-all text-xs uppercase tracking-widest pb-1">Conocer más</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CityLanding;
