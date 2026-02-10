import React from 'react';
import HeroSplit from '../components/HeroSplit';
import TrustSection from '../components/TrustSection';
import CompactCatalog from '../components/CompactCatalog';
import CitySEOSection from '../components/CitySEOSection';
import CorporateSection from '../components/CorporateSection';

const Home: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSplit />
            <TrustSection />
            <CompactCatalog />

            {/* City Section - keeping dark as contrast or modifying? Let's check props. Assuming CitySEOSection is dark by default. */}
            <CitySEOSection />

            <CorporateSection />
        </main>
    );
};

export default Home;
