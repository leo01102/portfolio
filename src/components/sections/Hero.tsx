import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NeonButton } from '@components/ui/NeonButton';
import { useLanguage } from '@context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col pt-20 px-6 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-primary">SYSTEMS ENGINEER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {t.personal.heroTitle.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.personal.heroTitle.highlight1}</span>{t.personal.heroTitle.middle}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> {t.personal.heroTitle.highlight2}</span>
          </h1>

          <p className="text-lg text-textMuted leading-relaxed max-w-xl mb-8">
            {t.personal.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <NeonButton href="#projects">{t.nav.projects}</NeonButton>
            <div className="flex items-center gap-4 ml-4">
              <a href={t.personal.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surfaceHighlight hover:bg-white/10 transition-colors border border-white/5">
                <Github className="w-5 h-5" />
              </a>
              <a href={t.personal.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surfaceHighlight hover:bg-white/10 transition-colors border border-white/5">
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
              </a>
              <a href={`mailto:${t.personal.email}`} className="p-3 rounded-full bg-surfaceHighlight hover:bg-white/10 transition-colors border border-white/5">
                <Mail className="w-5 h-5 text-red-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side 'Card' Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-8 rounded-3xl bg-surface/50 backdrop-blur-xl border border-white/10 shadow-2xl">
            <h3 className="text-xs font-bold tracking-widest text-textMuted uppercase mb-4">{t.personal.whatICanDo.title}</h3>
            <p className="text-xl text-white mb-8">
              {t.personal.whatICanDo.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {t.personal.whatICanDo.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surfaceHighlight/50 border border-white/5 hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-textMuted">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] -z-10 animate-blob animation-delay-2000" />
          </div>
        </motion.div>

      </div>
      
      {/* Stats footer in Hero */}
      <div className="w-full mt-12 pb-10">
        <div className="max-w-7xl mx-auto flex gap-12 border-t border-white/10 pt-6">
          {t.personal.stats.map((stat, idx) => (
             <div key={idx}>
              <span className="block text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-textMuted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};