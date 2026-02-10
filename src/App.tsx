import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CityLanding from './pages/CityLanding';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from './data';
// Link and ArrowRight removed as they were unused imports from lucide-react

// Reusable Component for Category Pages (Classics vs Innovation)
const CategoryPage: React.FC<{ category: 'classic' | 'innovator', title: string, subtitle: string }> = ({ category, title, subtitle }) => {
  const products = PRODUCTS.filter(p => p.category === category);

  return (
    <main className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-enyoik-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Catálogo Enyoik</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a href={`/producto/${product.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </a>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-3">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-enyoik-gold border border-enyoik-gold/30 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4 max-w-md">{product.shortDescription}</p>
                </div>
                <a href={`/producto/${product.id}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-enyoik-gold hover:text-black hover:border-enyoik-gold transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-enyoik-gold selection:text-black">
      <Topbar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573215518719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          ¡Cotiza en segundos!
        </span>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />

          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />

          {/* Categories */}
          <Route path="/cabinas-clasicas" element={<CategoryPage category="classic" title="Cabinas Clásicas" subtitle="La elegancia nunca pasa de moda. Conoce nuestras cabinas de fotos tradicionales y espejos mágicos." />} />
          <Route path="/innovacion" element={<CategoryPage category="innovator" title="Innovación" subtitle="Tecnología de punta para eventos que buscan hacerse virales. Video Booths, Glambots y más." />} />

          {/* City Routes */}
          <Route path="/eventos" element={<CityLanding />} /> {/* General events landing */}
          <Route path="/eventos/:city" element={<CityLanding />} />

          {/* Legacy/Direct City Routes redirects or aliases */}
          <Route path="/bogota" element={<CityLanding />} />
          <Route path="/medellin" element={<CityLanding />} />
          <Route path="/cali" element={<CityLanding />} />
          <Route path="/eje-cafetero" element={<CityLanding />} />
          <Route path="/costa-atlantica" element={<CityLanding />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
