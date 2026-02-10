import React from 'react';
import { motion } from 'framer-motion';

const CorporateSection: React.FC = () => {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Marcas que Vibran</span>
                        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                            Respaldamos los <span className="italic">Mejores</span> Eventos Corporativos
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            No solo brindamos diversión, brindamos una herramienta potente de marketing y branding. Activaciones de marca, fiestas de fin de año y lanzamientos con un sello de calidad Enyoik.
                        </p>
                        <div className="grid grid-cols-2 gap-8 text-center italic font-serif text-xl border-t border-gray-100 pt-8">
                            <div>
                                <span className="block text-4xl font-sans font-black not-italic text-gold mb-2">500+</span>
                                Eventos Realizados
                            </div>
                            <div>
                                <span className="block text-4xl font-sans font-black not-italic text-gold mb-2">100k+</span>
                                Fotos Impresas
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-10 bg-gold/5 blur-[100px] rounded-full"></div>
                        <img
                            src="/images/Empresas.png"
                            alt="Empresas que confían en nosotros"
                            className="relative w-full h-auto transition-all duration-700 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSection;
