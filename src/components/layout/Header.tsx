import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { NeonButton } from '@components/ui/NeonButton';
import { useLanguage } from '@context/LanguageContext';
import { Language } from '@data/resume';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'py-4 bg-background/95 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 rounded-lg bg-surfaceHighlight border border-white/10 group-hover:border-primary/50 transition-colors">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wide">LEONARDO REARTE</span>
            <span className="text-[10px] text-textMuted uppercase tracking-wider">{t.nav.role}</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm text-textMuted hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
           {/* Language Switcher */}
           <div className="flex items-center gap-2 bg-surfaceHighlight/50 rounded-full p-1 border border-white/5">
              {(['es', 'en', 'nl'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === lang 
                      ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                      : 'text-textMuted hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
           </div>

           <NeonButton href="mailto:leonardorearte0@gmail.com" variant="secondary" icon={true}>
              {t.nav.talk}
           </NeonButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div 
            className="fixed top-0 left-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 md:hidden flex flex-row justify-between items-start z-50 shadow-2xl">
            <div className="flex flex-col gap-6">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-textMuted hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            </div>
            
            <div className="flex flex-col items-center gap-2 bg-surfaceHighlight/50 rounded-full p-1 border border-white/5 w-fit">
              {(['es', 'en', 'nl'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium transition-all ${
                      language === lang 
                        ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                        : 'text-textMuted hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
};