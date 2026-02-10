import React from 'react';
import { Instagram, Facebook, Phone as WhatsApp, Calendar } from 'lucide-react';

const Topbar: React.FC = () => {
    return (
        <div className="bg-enyoik-gold text-black py-2 px-4 text-xs font-bold tracking-widest relative z-[60]">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Message (Desktop only) */}
                <div className="hidden md:flex items-center gap-4">
                    <span>✨ EXPERIENCIAS PREMIUM PARA EVENTOS EN COLOMBIA</span>
                    <span className="hidden lg:inline text-black/50">|</span>
                    <a href="tel:+573215518719" className="hidden lg:flex items-center gap-1 hover:text-white transition-colors">
                        <WhatsApp size={14} /> +57 321 551 8719
                    </a>
                </div>

                {/* Mobile: Just the core CTA */}
                <div className="md:hidden flex items-center gap-2">
                    <span className="uppercase">Alquiler de Cabinas</span>
                </div>

                {/* Right: Socials & Reserve */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Instagram size={16} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Facebook size={16} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                        </a>
                    </div>

                    <a href="https://wa.me/573215518719" className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all">
                        <Calendar size={12} />
                        <span>RESERVAR</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
