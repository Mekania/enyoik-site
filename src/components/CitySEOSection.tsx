import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { CITIES } from '../data';

const CitySEOSection: React.FC = () => {
    return (
        <section className="py-24 bg-enyoik-sand text-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-enyoik-black font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Cobertura Nacional</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Llevamos la Experiencia a tu Ciudad</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Desde bodas en Cartagena hasta eventos corporativos en Bogotá. Enyoik viaja contigo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CITIES.map((city) => (
                        <Link to={`/eventos/${city.slug}`} key={city.id} className="group relative h-64 rounded-2xl overflow-hidden block">
                            <img
                                src={city.heroImage}
                                alt={`Alquiler cabina fotos ${city.name}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={16} className="text-enyoik-gold" />
                                    <span className="text-white text-xs font-bold uppercase tracking-widest">{city.name}</span>
                                </div>
                                <h3 className="text-2xl font-serif text-white group-hover:translate-x-2 transition-transform duration-300 flex items-center justify-between">
                                    {city.name}
                                    <ArrowRight size={20} className="text-enyoik-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </div>
                        </Link>
                    ))}

                    {/* CTA Card */}
                    <Link to="/contacto" className="group relative h-64 rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-enyoik-black text-white hover:bg-enyoik-gold hover:text-black transition-colors p-6 text-center border border-black/5">
                        <MapPin size={40} className="mb-4 text-enyoik-gold group-hover:text-black transition-colors" />
                        <h3 className="text-2xl font-serif mb-2">¿Otra Ciudad?</h3>
                        <p className="text-sm opacity-70 group-hover:opacity-100">Contáctanos para eventos fuera de cobertura principal.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CitySEOSection;
