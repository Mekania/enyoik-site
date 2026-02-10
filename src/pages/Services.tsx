import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Zap, UserCheck, Star, Sparkles, Smartphone, Printer, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    return (
        <main className="bg-enyoik-black text-white min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/corporate/event_4.png"
                        alt="Enyoik Service"
                        className="w-full h-full object-cover opacity-50"
                        onError={(e) => { e.currentTarget.src = "/images/corporate/event_1.jpg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-enyoik-black via-enyoik-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-enyoik-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Experiencia 5 Estrellas
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
                    >
                        Más que una Máquina, <br /> un <span className="italic text-gradient-gold">Servicio Integral.</span>
                    </motion.h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Cuidamos cada detalle para que tú solo te preocupes por disfrutar. Descubre qué hace a Enyoik diferente.
                    </p>
                </div>
            </section>

            {/* Feature 1: The Staff (Alternating Layout) */}
            <section className="py-24 bg-enyoik-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10">
                                <img src="/images/corporate/event_5.png" alt="Staff Enyoik" className="w-full h-full object-cover" />
                                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-6 py-3 rounded-full border border-white/10">
                                    <div className="flex items-center gap-2 text-enyoik-gold">
                                        <UserCheck size={20} />
                                        <span className="text-white font-bold text-sm uppercase tracking-widest">Host Dedicado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6">Staff que <span className="text-enyoik-gold">Anima</span> tu Fiesta</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Olvídate de operadores aburridos sentados en una silla. Nuestro staff está uniformado, capacitado y listo para invitar a tus huéspedes a perder la timidez.
                            </p>
                            <ul className="space-y-4">
                                {["Presentación Impecable", "Actitud de Servicio", "Asistencia Técnica Inmediata"].map(item => (
                                    <li key={item} className="flex items-center gap-4 text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-enyoik-gold"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Equipment (Light Section) */}
            <section className="py-24 bg-enyoik-cream text-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6">Tecnología de <span className="italic text-enyoik-gold">Vanguardia</span></h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                No escatimamos en calidad. Usamos cámaras DSLR profesionales, iluminación de estudio y el software más rápido del mercado para compartir al instante.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Camera size={32} className="text-enyoik-gold mb-4" />
                                    <h4 className="font-bold font-serif text-lg">Cámaras DSLR</h4>
                                    <p className="text-sm text-gray-500">Fotos nítidas, dignas de imprimir.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Sparkles size={32} className="text-enyoik-gold mb-4" />
                                    <h4 className="font-bold font-serif text-lg">Iluminación Pro</h4>
                                    <p className="text-sm text-gray-500">Flashes de estudio y aros LED.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Smartphone size={32} className="text-enyoik-gold mb-4" />
                                    <h4 className="font-bold font-serif text-lg">Sharing Station</h4>
                                    <p className="text-sm text-gray-500">AirDrop, QR y Email al instante.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <Printer size={32} className="text-enyoik-gold mb-4" />
                                    <h4 className="font-bold font-serif text-lg">Impresión Térmica</h4>
                                    <p className="text-sm text-gray-500">Fotos secas y duraderas en 12 seg.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                                <img src="/images/MirrorBlack.jpg" alt="Equipos Enyoik" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Props & Branding (Dark Section) */}
            <section className="py-24 bg-enyoik-black relative overflow-hidden">
                <div className="absolute top-0 right-0 p-64 bg-enyoik-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-enyoik-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Personalización</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Tu Marca, <span className="italic text-gray-400">Tu Estilo.</span></h2>
                        <p className="text-gray-400 text-lg">
                            Desde el diseño de la foto impresa hasta la pantalla de bienvenida de la cabina. Todo lleva tu sello personal o corporativo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Plantillas a Medida", desc: "Diseñamos el marco de tus fotos siguiendo tu invitación o branding.", img: "/images/photoboothtiras.jpg" },
                            { title: "Props Premium", desc: "Nada de papel y palitos. Usamos letreros en PVC, sombreros reales y gafas cool.", img: "/images/social/img_1941.jpg" },
                            { title: "Interfaz Touch", desc: "La pantalla de la cabina saluda a tus invitados con tu nombre o logo.", img: "/images/Wally.jpg" }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => { e.currentTarget.src = "/images/corporate/event_1.jpg"; }}
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-serif text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 bg-enyoik-black border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">¿Te animas?</h2>
                    <div className="flex justify-center gap-6">
                        <a href="https://wa.me/573215518719" className="btn-gold text-lg px-10 py-4">
                            Reservar Fecha
                        </a>
                        <Link to="/contacto" className="px-10 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-black transition-all">
                            Más Información
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Services;
