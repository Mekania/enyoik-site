import React from 'react';
import { Instagram, Facebook, Phone as WhatsApp, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <img src="/images/logo-enyoik.png" alt="Enyoik Logo" className="h-12 w-auto mb-6" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevando la experiencia de tus eventos en Colombia. Elegancia, tecnología y diversión en un solo lugar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all">
                                <WhatsApp size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold font-serif text-lg mb-6">Navegación</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">Productos</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Galería</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold font-serif text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center space-x-3">
                                <WhatsApp size={16} className="text-gold" />
                                <span>+57 321 551 8719</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={16} className="text-gold" />
                                <span>hola@enyoik.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin size={16} className="text-gold" />
                                <span>Bogotá - Medellín - Cali</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cities */}
                    <div>
                        <h4 className="text-gold font-serif text-lg mb-6">Ciudades</h4>
                        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                            <span className="px-3 py-1 border border-white/10 rounded-full">Bogotá</span>
                            <span className="px-3 py-1 border border-white/10 rounded-full">Medellín</span>
                            <span className="px-3 py-1 border border-white/10 rounded-full">Cali</span>
                            <span className="px-3 py-1 border border-white/10 rounded-full">Barranquilla</span>
                            <span className="px-3 py-1 border border-white/10 rounded-full">Cartagena</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600 tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} ENYOIK CABINAS DE FOTOS. TODOS LOS DERECHOS RESERVADOS.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
