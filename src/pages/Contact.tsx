import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `Hola Enyoik, soy ${formState.name}. Me interesa una cotización para un evento tipo ${formState.eventType}. Mi correo es ${formState.email}. Mensaje: ${formState.message}`;
        window.open(`https://wa.me/573215518719?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="bg-black min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3 space-y-12"
                    >
                        <div>
                            <span className="text-enyoik-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Hablemos</span>
                            <h1 className="text-5xl font-serif text-white mb-6">Contáctanos</h1>
                            <p className="text-gray-400 text-lg">Estamos listos para llevar tu evento al siguiente nivel. Escríbenos y recibe una cotización personalizada en minutos.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-enyoik-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-1">Teléfono / WhatsApp</h3>
                                    <p className="text-gray-400">+57 321 551 8719</p>
                                    <p className="text-gray-500 text-sm">Respuesta inmediata</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-enyoik-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-1">Email</h3>
                                    <p className="text-gray-400">hola@enyoik.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-full text-enyoik-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-1">Cobertura</h3>
                                    <p className="text-gray-400">Bogotá, Medellín, Cali, Eje Cafetero, Costa Atlántica</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-enyoik-gold focus:outline-none transition-colors"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-enyoik-gold focus:outline-none transition-colors"
                                        placeholder="+57..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-enyoik-gold focus:outline-none transition-colors"
                                        placeholder="tu@correo.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Tipo de Evento</label>
                                    <select
                                        name="eventType"
                                        value={formState.eventType}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-enyoik-gold focus:outline-none transition-colors appearance-none"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="Boda">Boda</option>
                                        <option value="Quince Años">Quince Años</option>
                                        <option value="Corporativo">Corporativo</option>
                                        <option value="Activación de Marca">Activación de Marca</option>
                                        <option value="Cumpleaños">Cumpleaños</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-enyoik-gold focus:outline-none transition-colors"
                                    placeholder="Cuéntanos más sobre tu evento (Fecha, Ciudad, Cantidad de invitados...)"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-gold py-4 text-lg flex justify-center items-center gap-2">
                                Enviar Solicitud <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
