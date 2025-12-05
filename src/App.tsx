import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@components/layout/Header';
import { Hero } from '@components/sections/Hero';
import { Projects } from '@components/sections/Projects';
import { Skills } from '@components/sections/Skills';
import { Footer } from '@components/layout/Footer';

import { LanguageProvider } from '@context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-textMain selection:bg-primary/30 selection:text-white overflow-x-hidden">
        
        {/* Main Content */}
        <div className="relative z-0">
          <Header />
          
          <main>
            <Hero />
            <Projects />
            <Skills />
          </main>

          <Footer />
        </div>
        <Analytics />
      </div>
    </LanguageProvider>
  );
};

export default App;