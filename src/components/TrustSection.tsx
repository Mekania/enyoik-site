import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustSection: React.FC = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const cards = [
        {
            title: "Calidad de Estudio",
            subtitle: "La mejor luz, siempre.",
            desc: "Usamos equipos DSLR y flashes profesionales. Tu piel se verá increíble en cada toma.",
            img: "/images/MirrorBlack.jpg",
            align: "items-start"
        },
        {
            title: "Pura Diversión",
            subtitle: "Momentos espontáneos.",
            desc: "Nuestro staff anima a tus invitados a soltarse. Capturamos la risa real, no la pose forzada.",
            img: "/images/social/img_0248.jpg",
            align: "items-center"
        },
        {
            title: "Totalmente Tuyo",
            subtitle: "Branding al 100%.",
            desc: "Desde la pantalla de inicio hasta el marco de la foto. Todo diseñado para tu evento.",
            img: "/images/corporate/event_4.png",
            align: "items-end"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-enyoik-cream relative overflow-hidden">

            {/* Background Marquee */}
            <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-5 pointer-events-none select-none">
                <motion.div style={{ x }} className="text-[12rem] font-sans font-black text-black leading-none uppercase">
                    Experiencia Enyoik  •  Calidad  •  Estilo  •  Diversión  •  Experiencia Enyoik  •  Calidad  •  Estilo  •  Diversión
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-enyoik-black font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Por qué elegirnos</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-enyoik-black mb-6">
                        Creamos <span className="italic text-enyoik-gold">Momentos</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        Olvídate de las cabinas aburridas. Nosotros traemos el estudio fotográfico a tu fiesta.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-default shadow-2xl"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => { e.currentTarget.src = "/images/corporate/event_1.jpg"; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-90" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-enyoik-gold font-bold text-xs uppercase tracking-widest mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {card.subtitle}
                                </span>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-[80%] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
